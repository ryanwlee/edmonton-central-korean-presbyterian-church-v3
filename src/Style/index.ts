import Styled from "styled-components";
import React from "react";

const size = {
  xs: "400px", // for small screen mobile
  sm: "600px", // for mobile screen
  md: "900px", // for tablets
  lg: "1280px", // for laptops
  xl: "1440px", // for desktop / monitors
  xxl: "1920px", // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};

export const GREY_BG_COLOR = "#F5F6F6";

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label: React.CSSProperties = {
  color: "#353535",
  fontSize: "22px",
  fontWeight: "500",
  fontFamily: "establishRetrosansOTF",
  lineHeight: "35px",
};

export const LabelGreen: React.CSSProperties = {
  color: "#5DB683",
  fontSize: "22px",
  fontWeight: "500",
  fontFamily: "establishRetrosansOTF",
  lineHeight: "35px",
};

export const Content: React.CSSProperties = {
  color: "#353535",
  fontSize: "16px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Light",
  textAlign: "center",
  lineHeight: "20px",
};

export const ContentMedium: React.CSSProperties = {
  color: "#353535",
  fontSize: "16px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Medium",
};

export const ContentBold: React.CSSProperties = {
  color: "#353535",
  fontSize: "16px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Bold",
  textAlign: "center",
};

export const ContentBoldGreen: React.CSSProperties = {
  color: "#5DB683",
  fontSize: "16px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Bold",
  textAlign: "center",
};

export const Container = Styled.div`
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 80px;
  padding-bottom: 100px;
  text-align: center;

  @media ${device.lg} {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media ${device.md} {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media ${device.sm} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const FlexRow: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

export const FlexColumn: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export const LeftArrowButtonCss: React.CSSProperties = {
  height: "50px",
  marginRight: "auto",
};

export const RightArrowButtonCss: React.CSSProperties = {
  height: "50px",
  marginLeft: "auto",
};

export const GreenLine: React.CSSProperties = {
  borderTop: "4px solid #5DB683",
  height: "5px",
  width: "26px",
};
