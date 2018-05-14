import React from 'react';
import styled, { css } from 'styled-components';
import GatsbyLink from 'gatsby-link';

import { themeGet, fontSize, fontWeight } from 'styled-system';

import rem from '../../utils/rem';
import { sizes, colors, mediaQueryMinWidthWrap } from '../priceline-styled-system/theme';
import { Link } from '../priceline-styled-system';
import NavSeparator from './NavSeparator';
import NavLink from './NavLink';

// import Link from '../Link/LinkPD';

console.log(sizes);

const Wrapper = styled.nav`
  flex-direction: column;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  ${mediaQueryMinWidthWrap.lg(
    css`
      flex-direction: row;
    `
  )};
  ${fontSize} ${fontWeight};
`;

// line-height: ${rem(sizes.special.navbarHeight)};
// letter-spacing: ${rem(0.4)};
// const NavLink = styled(Link).attrs({

const GatsbyLinkStyled = NavLink.withComponent(GatsbyLink);

const NavLinks = ({ onItemClick }) => (
  <Wrapper fontSize={[6, 6, 6, 3, 3]} fontWeight="bold">
    <GatsbyLinkStyled
      to="/vision"
      color="vision"
      onClick={() => onItemClick(colors.vision)}
      hovercolor={themeGet('colors.black')}
    >
      Vision
    </GatsbyLinkStyled>
    <NavLink href="#" color="work" onClick={() => onItemClick(colors.work, true)} hovercolor={colors.black}>
      Work
    </NavLink>
    <GatsbyLinkStyled
      to="/journal"
      color="journal"
      onClick={() => onItemClick(colors.journal)}
      hovercolor={themeGet('colors.black')}
    >
      Journal
    </GatsbyLinkStyled>
    <GatsbyLinkStyled
      to="/projects"
      color="projects"
      onClick={() => onItemClick(colors.projects)}
      hovercolor={themeGet('colors.black')}
    >
      Projects
    </GatsbyLinkStyled>
    <GatsbyLinkStyled
      to="/contact"
      color="contact"
      onClick={() => onItemClick(colors.contact)}
      hovercolor={themeGet('colors.black')}
    >
      Contact
    </GatsbyLinkStyled>
    <GatsbyLinkStyled
      to="/shop"
      color="shop"
      onClick={() => onItemClick(colors.shop)}
      hovercolor={themeGet('colors.black')}
    >
      Shop
    </GatsbyLinkStyled>
  </Wrapper>
);

export default NavLinks;
