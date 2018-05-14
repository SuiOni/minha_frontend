import React from 'react';
import styled, { css } from 'styled-components';
import GatsbyLink from 'gatsby-link';

import rem from '../../utils/rem';
import Link from '../Link/LinkPD';
import { mediaQueryMinWidthWrap } from '../priceline-styled-system/theme';

const LogoLink = styled(GatsbyLink).attrs({
  to: '/',
  // onClick: props => props.onClick('transparent'),
})`
  display: none;
  position: absolute;
  vertical-align: center;
  z-index: 100;
  left: ${rem(35)};
  ${mediaQueryMinWidthWrap.lg(
    css`
      display: block;
    `
  )};
`;

export default LogoLink;
