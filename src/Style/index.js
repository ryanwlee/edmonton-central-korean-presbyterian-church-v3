import Styled from 'styled-components';

const size = {
  xs: '400px', // for small screen mobile
  sm: '600px', // for mobile screen
  md: '900px', // for tablets
  lg: '1280px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px', // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};

export const GREY_BG_COLOR = '#F5F6F6';

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = {
  color: '#353535',
  fontSize: '22px',
  fontWeight: '500',
  fontFamily: 'establishRetrosansOTF',
  lineHeight: '35px',
};

export const LabelGreen = {
  color: '#5DB683',
  fontSize: '22px',
  fontWeight: '500',
  fontFamily: 'establishRetrosansOTF',
  lineHeight: '35px',
};

export const Content = {
  color: '#353535',
  fontSize: '18px',
  fontWeight: '300',
  fontFamily: 'KoPubWorld Dotum Light',
  textAlign: 'center',
  lineHeight: '25px',
};

export const ContentMedium = {
  color: '#353535',
  fontSize: '18px',
  fontWeight: '300',
  fontFamily: 'KoPubWorld Dotum Medium',
};

export const ContentBold = {
  color: '#353535',
  fontSize: '18px',
  fontWeight: '300',
  fontFamily: 'KoPubWorld Dotum Bold',
  textAlign: 'center',
};

export const ContentBoldGreen = {
  color: '#5DB683',
  fontSize: '18px',
  fontWeight: '300',
  fontFamily: 'KoPubWorld Dotum Bold',
  textAlign: 'center',
};

export const Container = Styled.div`
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 150px;
  padding-bottom: 150px;

  @media ${device.lg} {
    text-align: center;
  }
`;

export const FlexRow = {
  display: 'flex',
  flexDirection: 'row',
};

export const FlexColumn = {
  display: 'flex',
  flexDirection: 'column',
};

export const LeftArrowButtonCss = {
  height: '50px',
  marginRight: 'auto',
};

export const RightArrowButtonCss = {
  height: '50px',
  marginLeft: 'auto',
};

export const GreenLine = {
  borderTop: '4px solid #5DB683',
  height: '5px',
  width: '26px',
};
