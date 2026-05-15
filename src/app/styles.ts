import { SxProps, Theme } from "@mui/material/styles";

export const pageContainer: SxProps<Theme> = {
  px: { xs: 2.5, sm: 7.5, md: 7.5, lg: 10, xl: 25 },
  py: { xs: 5, md: 10 },
  textAlign: "center",
};

export const flexRow: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
};

export const flexColumn: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

export const label: SxProps<Theme> = {
  color: "#353535",
  fontSize: "22px",
  fontWeight: "500",
  fontFamily: "establishRetrosansOTF",
  lineHeight: "35px",
};

export const labelGreen: SxProps<Theme> = {
  color: "#5DB683",
  fontSize: "22px",
  fontWeight: "500",
  fontFamily: "establishRetrosansOTF",
  lineHeight: "35px",
};

export const content: SxProps<Theme> = {
  color: "#353535",
  fontSize: "16px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Light",
  textAlign: "center",
  lineHeight: "20px",
};

export const contentMedium: SxProps<Theme> = {
  color: "#353535",
  fontSize: "16px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Medium",
};

export const contentBold: SxProps<Theme> = {
  color: "#353535",
  fontSize: "16px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Bold",
  textAlign: "center",
};

export const contentBoldGreen: SxProps<Theme> = {
  color: "#5DB683",
  fontSize: "16px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Bold",
  textAlign: "center",
};

export const leftArrowButton: SxProps<Theme> = {
  height: "50px",
  marginRight: "auto",
};

export const rightArrowButton: SxProps<Theme> = {
  height: "50px",
  marginLeft: "auto",
};

export const greenLine: SxProps<Theme> = {
  borderTop: "4px solid #5DB683",
  height: "5px",
  width: "26px",
};

export const GREY_BG_COLOR = "#F5F6F6";
export const GREEN_COLOR = "#5DB683";
