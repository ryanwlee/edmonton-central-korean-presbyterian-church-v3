import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Admin from "./Admin";
import { expectSnapshot, renderWithRouter } from "../test-utils/render";

const pdf = () =>
  new File(["%PDF-1.4"], "jubo.pdf", { type: "application/pdf" });

const passwordBox = () => screen.getByPlaceholderText("Enter password");
const fileBox = () => document.querySelector('input[type="file"]');
const uploadButton = () => screen.getByRole("button", { name: /Upload Jubo/ });

const respondWith = (ok, body) =>
  jest.fn().mockResolvedValue({ ok, json: async () => body });

beforeEach(() => {
  global.fetch = respondWith(true, { message: "Uploaded" });
});

afterEach(() => {
  delete global.fetch;
});

it("matches snapshot", () => {
  expectSnapshot(<Admin />);
});

it("keeps upload disabled until both a file and a password are supplied", async () => {
  const user = userEvent.setup();
  renderWithRouter(<Admin />);

  expect(uploadButton()).toBeDisabled();

  await user.type(passwordBox(), "secret");
  expect(uploadButton()).toBeDisabled();

  await user.upload(fileBox(), pdf());
  expect(uploadButton()).toBeEnabled();
});

it("rejects a file that is not a PDF", async () => {
  // applyAccept is off so the input's accept=".pdf" filter does not swallow the
  // file before the component's own validation can run.
  const user = userEvent.setup({ applyAccept: false });
  renderWithRouter(<Admin />);

  await user.upload(
    fileBox(),
    new File(["hello"], "notes.txt", { type: "text/plain" })
  );

  expect(screen.getByText("Please select a PDF file")).toBeInTheDocument();
  expect(uploadButton()).toBeDisabled();
});

it("posts the bulletin and clears the form on success", async () => {
  const user = userEvent.setup();
  renderWithRouter(<Admin />);

  await user.type(passwordBox(), "secret");
  await user.upload(fileBox(), pdf());
  await user.click(uploadButton());

  expect(global.fetch).toHaveBeenCalledWith("/server/apis/jubo.php", {
    method: "POST",
    body: expect.any(FormData),
  });

  const [, request] = global.fetch.mock.calls[0];
  expect(request.body.get("password")).toBe("secret");
  expect(request.body.get("juboFile")).toBeInstanceOf(File);

  expect(await screen.findByText("Uploaded")).toBeInTheDocument();
  expect(passwordBox()).toHaveValue("");
});

it("surfaces the server message when the upload is rejected", async () => {
  const user = userEvent.setup();
  global.fetch = respondWith(false, { message: "Wrong password" });
  renderWithRouter(<Admin />);

  await user.type(passwordBox(), "nope");
  await user.upload(fileBox(), pdf());
  await user.click(uploadButton());

  expect(await screen.findByText("Wrong password")).toBeInTheDocument();
  expect(passwordBox()).toHaveValue("nope");
});

it("reports a network failure instead of failing silently", async () => {
  const user = userEvent.setup();
  global.fetch = jest.fn().mockRejectedValue(new Error("offline"));
  const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
  renderWithRouter(<Admin />);

  await user.type(passwordBox(), "secret");
  await user.upload(fileBox(), pdf());
  await user.click(uploadButton());

  expect(await screen.findByText("Error uploading file")).toBeInTheDocument();
  consoleError.mockRestore();
});
