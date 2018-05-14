import React from 'react';
import { Link } from '../priceline-styled-system';
import { mediaQueryMinWidthWrap } from '../priceline-styled-system/theme';
import { css } from 'styled-components';
import rem from '../../utils/rem';

// import Link from '../Link/LinkPD';
// margin-right: ${rem(15)};

const NavLink = Link.extend`
  flex: 0 0 auto;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.2s, transform 0.2s, color 0.5s;
  color: ${p => p.color};
  &:hover {
    opacity: 0.8;
    text-decoration: none;
    color: ${p => p.hovercolor};
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
  &:last-child {
    padding-right: rem(15);
  }
  ${mediaQueryMinWidthWrap.lg(
    css`
      margin-right: ${rem(0)};
    `
  )};
`;

export default NavLink;
