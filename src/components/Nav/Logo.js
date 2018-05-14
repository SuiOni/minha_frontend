import React from 'react';
import styled, { css } from 'styled-components';

import rem from '../../utils/rem';
import { sizes } from '../Priceline/theme';

const LogoDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;

  background-position: center;
  background-size: contain;
  width: 130px;
`;

// const Img = styled.img`
//   width: 100%;
// `;

// ${p =>
//   p.compact
//     ? css`
//         background-image: url(${logoSmall});
//         width: ${rem(100)};
//         height: ${rem(30)};
//       `
//     : css`
//         background-image: url(${logoLarge});
//         width: ${rem(164)};
//         height: ${rem(40)};
//       `};
const Logo = ({ children, imgPath }) => (
  <LogoDiv>
    {/* <Img src={imgPath} /> */}
    {children}
  </LogoDiv>
);
export default Logo;
