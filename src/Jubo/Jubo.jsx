import { Container } from "../Style";
import PDFView from "./PDFView";
const juboPdf = "https://edmontoncc.net/jubofile/jubo.pdf";

const serviceTitle = {
  color: "#000000",
  fontSize: "22px",
  fontWeight: "500",
  fontFamily: "establishRetrosansOTF",
  marginBottom: "40px",
};

const Jubo = () => {
  return (
    <Container>
      <div style={{ marginBottom: "80px" }}>
        <div style={serviceTitle}>주보</div>
        <PDFView file={juboPdf} />
      </div>
    </Container>
  );
};

export default Jubo;
