import { Container } from "@/Style";
import PDFView from "@/components/common/PDFViewer";
import { JUBO_PDF_URL } from "@/data/config";

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
        <PDFView file={JUBO_PDF_URL} />
      </div>
    </Container>
  );
};

export default Jubo;
