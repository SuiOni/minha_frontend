import React from 'react';
import { sizes as scSizes } from 'styled-system';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import GatsbyLink from 'gatsby-link';

import rem from '../../utils/rem';
import { mediaQueryMinWidthWrap, colors, sizes } from '../priceline-styled-system/theme';
import { Box, Flex, Text } from '../priceline-styled-system';

import { CloseIcon, FoldIcon, ArrowIcon } from './NavIcons';
import Link from '../Link/LinkPD';
import NavLinks from './NavLinks';
import LogoLink from './LogoLink';
import Social from './Social';
import Logo from './Logo';
import NavSeparator from './NavSeparator';
import NavButton from './NavButton';
import logoGalera from '../../img/logos/logo_galera.png';
import NavLink from './NavLink';
import NavSeperatorLine from './NavSeparatorLine';
// const Wrapper = styled.div`
//   display: flex;

//   ${mediaQueryMinWidthWrap.lg(css`
//     display: none;
//     align-items: center;
//     justify-content: space-between;
//     height: ${rem(sizes.special.navbarHeight)};
//   `)};
// `;

const SecondaryMenu = Box.extend`
  position: fixed;
  top: ${rem(sizes.special.navbarHeight)};
  left: 0;
  right: 0;

  ${p =>
    p.open
      ? css`
          height: ${rem(sizes.special.navbarHeight)};
        `
      : css`
          height: 0;
        `} display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  transition: height 0.1s, background 0.1s linear;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  overflow-y: hidden;
  background: ${props => props.background};
  ${mediaQueryMinWidthWrap.lg(
    css`
      overflow-x: hidden;
    `
  )};
`;

const MobileContent = Flex.extend`
  justify-content: flex-start;
  ${mediaQueryMinWidthWrap.lg(
    css`
      justify-content: center;
    `
  )};
`;
const Div = styled.div`
  margin: auto;
  display: flex;
`;
const ShadowBox = styled.div`
  display: block;
  height: inherit;
  width: 0;
  position: fixed;
  right: 0;
  box-shadow: 0px 0px 18px 2px;
  ${mediaQueryMinWidthWrap.lg(
    css`
      display: none;
    `
  )};
`;

// const ArrowWrapper = styled.div`
//   transition: transform 0.1s;

//   ${props =>
//     props.rotate &&
//     css`
//       transform-origin: 50% 55%;
//       transform: rotate(180deg);
//     `};
// `;

// simple box
const GatsbyLinkStyled = NavLink.withComponent(GatsbyLink);

const SecondaryMenuItem = styled.div`
  padding-right: ${rem(20)};
`;
const renderWork = onItemClick => [
  <GatsbyLinkStyled key="stills" to="/work/stills" color="black" hovercolor="white" onClick={() => onItemClick()}>
    <Text align="center" fontSize={2} bold caps>
      Stills
    </Text>
  </GatsbyLinkStyled>,
  <NavSeperatorLine key="sep1" />,
  <GatsbyLinkStyled key="motion" to="/work/motion" color="black" hovercolor="white" onClick={() => onItemClick()}>
    <Text align="center" fontSize={2} bold caps>
      Motion
    </Text>
  </GatsbyLinkStyled>,
  <NavSeperatorLine key="sep2" />,
  <GatsbyLinkStyled key="sound" to="/work/sound" color="black" hovercolor="white" onClick={() => onItemClick()}>
    <Text align="center" fontSize={2} bold caps>
      Sound
    </Text>
  </GatsbyLinkStyled>,
  <NavSeperatorLine key="sep3" />,
  <GatsbyLinkStyled key="matter" to="/work/matter" color="black" hovercolor="white" onClick={() => onItemClick()}>
    <Text align="center" fontSize={2} bold caps>
      Matter
    </Text>
  </GatsbyLinkStyled>,
  <NavSeperatorLine key="sep4" />,
  <GatsbyLinkStyled key="story" to="/work/story" color="black" hovercolor="white" onClick={() => onItemClick()}>
    <Text align="center" fontSize={2} bold caps>
      Story
    </Text>
  </GatsbyLinkStyled>,
];

const SecondNavbar = props => {
  const { isSecondNavFolded, onSecondNavToggle, secondNavColor, children, navLogo, isWorkOpen, toggleWork } = props;
  console.log(
    '___SecondNavbar.js___',
    'isSecondNavFolded',
    isSecondNavFolded,
    'secondNavColor',
    secondNavColor,
    'isWorkOpen',
    isWorkOpen,
    'toggleWork',
    toggleWork
  );
  return (
    <SecondaryMenu px={3} background={secondNavColor} color="black" open={!isSecondNavFolded}>
      {/* <NavLinks /> */}
      <LogoLink>
        <Logo imgPath={logoGalera}>
          {navLogo && (
            <Img
              sizes={
                navLogo.sizes // resolutions={data.file.childImageSharp.resolutions}
              }
            />
          )}
        </Logo>
      </LogoLink>
      <Box pr={3} width={1}>
        <MobileContent justifyContent="center" align="center">
          <Div>{isWorkOpen ? renderWork(toggleWork) : children}</Div>
        </MobileContent>
      </Box>
      <ShadowBox />
    </SecondaryMenu>
  );
};

export default SecondNavbar;
