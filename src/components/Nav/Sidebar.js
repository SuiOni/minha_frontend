import styled, { css } from 'styled-components';

import rem from '../../utils/rem';
import { mediaQueryMinWidthWrap, sizes, fonts, colors } from '../Priceline/theme';
import captureScroll from '../CaptureScroll/CaptureScroll';

const Sidebar = styled.nav`
  position: fixed;

  transform: translateX(${rem(-sizes.special.sidebarWidth)});
  display: block;
  z-index: 1;
  font-family: ${fonts.headerFont};

  left: 0;
  top: ${rem(sizes.special.navbarHeight)};
  bottom: 0;
  right: auto;
  width: ${rem(sizes.special.sidebarWidth)};
  background: ${colors.paleGrey};
  box-sizing: border-box;
  color: inherit;
  overflow-y: auto;
  transition: transform 150ms ease-out;

  ${mediaQueryMinWidthWrap.lg(css`
    ${p =>
      p.isFolded
        ? css`
            transform: translateZ(0);
          `
        : ``};
  `)};
`;

export default captureScroll(Sidebar);
