import styled, { css } from 'styled-components';

import rem from '../../utils/rem';
import { sizes } from '../priceline-styled-system/theme';
import { resetInput } from '../../utils/form';

const NavButton = styled.button`
  ${resetInput} flex: 0 0 auto;
  min-width: ${rem(sizes.special.navbarHeight)};
  height: ${rem(sizes.special.navbarHeight)};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  ${p =>
    p.active &&
    css`
      background: rgba(0, 0, 0, 0.07);
    `} &:focus {
    border: ${rem(2)} solid currentColor;
    border-radius: ${rem(2)};
  }
`;

export default NavButton;
