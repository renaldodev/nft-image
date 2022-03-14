import { css } from "styled-components";

export const fsBold = css`
  @font-face {
    font-family: "pro-bold";
    src: local("pro-bold"),
      url("../fonts/sf-pro-display-cufonfonts/SFPRODISPLAYBOLD.OTF")
        format("otf");
  }
`;

export const fsRegular = css`
  @font-face {
    font-family: "pro-regular";
    src: local("pro-regular"),
      url(../fonts/sf-pro-display-cufonfonts/SFPRODISPLAYREGULAR.OTF)
        format("OTF");
  }
`;
