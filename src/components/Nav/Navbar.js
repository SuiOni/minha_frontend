import React, { PureComponent } from 'react';
import Img from 'gatsby-image';

import styled, { css } from 'styled-components';
import { sizes as scSizes } from 'styled-system';
import rem from '../../utils/rem';
import { colors, sizes, fonts, mediaQueryMinWidthWrap } from '../Priceline/theme';
import { Flex, Text, Box, IconButton, CloseButton, Hide } from '../Priceline';
import Link from '../Link/LinkPD';
import NavLinks from './NavLinks';
import LogoLink from './LogoLink';
import Social from './Social';
import Logo from './Logo';
import SecondNavbar from './SecondNavbar';
import logoMinha from '../../img/logos/logo_minha.png';

{
  /* <Flex p={2} align="center" color="white" bg="gray">
  <Icon name="hotel" mr={2} />
  <Text bold mx={2}>
    Hello
  </Text>
  <Text ml="auto" mr={2}>
    Right Side
  </Text>
</Flex>; */
}
// const Wrapper = Flex.extend`
//   position: fixed;
//   left: 0;
//   box-sizing: border-box;
//   z-index: 3;

//   width: 100%;
//   height: ${rem(sizes.special.navbarHeight)};

//   font-family: ${fonts.headerFont};
//   font-size: ${rem(15)};
//   font-weight: 500;
//   background: ${props => (props.transparent ? 'transparent' : colors.violetRed)};
//   transition: background 300ms ease-out;
//   color: white;
// `;

// const NormalNavbar = Box.extend`
//   display: none;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 ${rem(20)};

//   ${mediaQueryMinWidthWrap.lg(css`
//     display: flex;
//   `)};
// `;

// const NormalNavbar = Box.extend`
//   display: none;
//   align-items: center;
//   justify-content: space-between;
//   ${mediaQueryMinWidthWrap.lg(css`
//     display: flex;
//   `)};
// `;

const NormalNavbar = Box.extend`
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const NavWrapper = Box.extend`
  height: 100%;
  width: 100%;
  position: fixed;
  background: white;
  top: 0;
  left: ${props => (props.isMobileNavFolded ? '-100%' : '0')};
  align-items: center;
  justify-content: center;
  display: flex;
  transition: left 0.5s ease-in-out;

  ${mediaQueryMinWidthWrap.lg(css`
    justify-content: flex-end;
    width: 100%;
    position: relative;
    height: auto;
    top: unset;
    left: unset;
  `)};
`;

const MobileNavbar = Box.extend`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${mediaQueryMinWidthWrap.lg(css`
    display: none;
  `)};
`;

const Wrapper = Flex.extend`
  position: fixed;
  z-index: 3;
  top: 0;
  background: ${props => (props.transparent ? 'transparent' : props.bg)};
  transition: background 300ms ease-out;
  text-transform: uppercase;
  height: ${rem(sizes.special.navbarHeight)};
  ${scSizes};
`;

const IconButtonHiddenDesktop = styled(IconButton)`
  ${mediaQueryMinWidthWrap.lg(css`
    display: none;
  `)};
`;

const CloseButtonHiddenDesktop = styled(CloseButton)`
  ${mediaQueryMinWidthWrap.lg(css`
    display: none;
  `)};
`;
const CloseButtonWrapper = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
`;
// ${mediaQueryMinWidthWrap.lg(css`
//   display: flex;
// `)};
// const NormalNavbar = styled(Box).attrs({
//   // width: 1,
//   // px: 2,
// })`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

class Navbar extends PureComponent {
  render() {
    const {
      onSideToggle,
      onSecondNavToggle,
      isSideFolded,
      isSecondNavFolded,
      secondNavColor,
      showSideNav,
      transparent,
      isMobileNavFolded,
      onMobileNavToggle,
      navLogo,
    } = this.props;
    return (
      <Wrapper transparent={transparent} align="center" bg="white" width={1} px={3}>
        <NormalNavbar width={1}>
          <StartWrapper>
            <LogoLink onClick={() => onSecondNavToggle()}>
              <Logo imgPath={logoMinha}>
                <Img
                  sizes={
                    navLogo.sizes // resolutions={data.file.childImageSharp.resolutions}
                  }
                />
              </Logo>
            </LogoLink>
          </StartWrapper>
          <NavWrapper isMobileNavFolded={isMobileNavFolded}>
            <CloseButtonWrapper mx={3} my={1}>
              <CloseButtonHiddenDesktop size={52} color="gray" onClick={() => onMobileNavToggle()} />
            </CloseButtonWrapper>
            <NavLinks
              onItemClick={(color, fromWork) => {
                onSecondNavToggle(color, fromWork);
                // onMobileNavToggle(true);
              }}
            />
          </NavWrapper>
          <EndWrapper>
            <IconButtonHiddenDesktop name="menu" size={52} color="gray" onClick={() => onMobileNavToggle()} />
          </EndWrapper>
        </NormalNavbar>

        {/* <MobileNavbar
          isSideFolded={isSideFolded}
          isMobileNavFolded={isMobileNavFolded}
          onSideToggle={onSideToggle}
          onSecondNavToggle={onSecondNavToggle}
          showSideNav={showSideNav}
        /> */}
      </Wrapper>
    );
  }
}

export default Navbar;
