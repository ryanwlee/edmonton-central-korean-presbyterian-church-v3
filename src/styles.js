import { createGlobalStyle } from "styled-components";

import KopubWorldDotumBold from "./fonts/KoPubWorldDotumBold.ttf";
import KopubWorldDotumLight from "./fonts/KoPubWorldDotumLight.woff";
import EstablishRetroSans from "./fonts/establishRetrosansOTF.woff";
import KopubWorldDotumMedium from "./fonts/KoPubWorldDotumMedium.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: 'KoPubWorld Dotum Bold';
    src: url(${KopubWorldDotumBold});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'KoPubWorld Dotum Light';
    src: url(${KopubWorldDotumLight});
    font-weight: normal;
    font-style: normal;
  }

  @font-face{
    font-family: 'establishRetrosansOTF';
    src: url(${EstablishRetroSans});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'KoPubWorld Dotum Medium';
    src: url(${KopubWorldDotumMedium});
    font-weight: normal;
    font-style: normal;
  }
`;
