import Explorer from "./Explorer";
import { expectSnapshot } from "../test-utils/render";

// The card grid is currently commented out upstream, so this guards the empty
// container against an accidental change.
it("matches snapshot", () => {
  expectSnapshot(<Explorer />);
});
