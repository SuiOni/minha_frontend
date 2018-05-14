import styled, { css } from 'styled-components';
import rem from '../../utils/rem';
import { fonts, sizes, mediaQueryMinWidthWrap } from '../Priceline/theme';

export const Container = styled.div`
  padding-left: 0;
  ${mediaQueryMinWidthWrap.lg(css`
    padding-left: ${rem(sizes.special.sidebarWidth)};
  `)};
`;

export const Content = styled.div`
  width: 75rem;
  max-width: 100%;
  margin: 0 auto;
  padding: ${rem(70)} ${rem(20)} ${rem(30)} ${rem(20)};
  box-sizing: border-box;
  transform: translateX(${p => (p.moveRight ? rem(sizes.special.sidebarWidth) : 0)});
  font-family: ${fonts.headerFont};
  transition: transform 150ms ease-out;

  ${mediaQueryMinWidthWrap.lg(css`
    padding: ${rem(90)} ${rem(40)} ${rem(30)} ${rem(40)};
  `)} ${p =>
    p.hero &&
    css`
      font-family: ${fonts.bodyFont};
      width: ${rem(1024)};
    `};
`;

export const Title = styled.h1`
  display: block;
  text-align: left;
  width: 100%;
  color: rgb(243, 182, 97);
  font-size: ${rem(42)};
  font-weight: bold;
  font-family: ${fonts.headerFont};
`;

export const Header = styled.h2`
  font-size: ${rem(32)};
  font-weight: 500;
  font-family: ${fonts.headerFont};
`;

export const SubHeader = styled.h3`
  display: block;
  margin: ${rem(35)} 0 ${rem(22)} 0;
  font-size: ${rem(24)};
  font-weight: 500;
  font-family: ${fonts.headerFont};
`;

export const TertiaryHeader = styled.h4`
  display: block;
  margin: ${rem(35)} 0 ${rem(22)} 0;
  font-size: ${rem(18)};
  font-weight: 600;
  font-family: ${fonts.headerFont};
`;
