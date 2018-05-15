// maybe delete typography / rebass
// add normalize. add grid-layout / system-component

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { Provider, Container, Toolbar, Heading, Fixed } from 'rebass';
import styled, { injectGlobal, css } from 'styled-components';
import WithIsScrolled from '../components/WithIsScrolled/WithIsScrolled';
import Navbar from '../components/Nav/Navbar';
import captureScroll from '../components/CaptureScroll/CaptureScroll';
import Link from '../components/Link/LinkPD';
import config from '../../data/SiteConfig';
import { Content } from '../components/Layout/LayoutSC';
// import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';
import { ThemeProvider } from '../components/Priceline';
import theme, { mediaQueryMinWidthWrap, sizes, colors } from '../components/Priceline/theme';
import rem from '../utils/rem';

const navBarSecondData = {
  vision: { color: colors.vision, content: 'Vision' },
  journal: { color: colors.journal, content: 'Journal' },
  contact: { color: colors.contact, content: 'Contact' },
  shop: { color: colors.shop, content: 'Shop' },
  projects: {
    color: colors.projects,
    content: {
      filter: ['homegrown', 'collab'],
    },
  },
  work: {
    color: colors.work,
    content: {
      stills: {
        filter: ['drawn', 'photo'],
      },
      motion: {
        filter: ['video', 'animation'],
      },
      sound: {
        filter: ['kyrl', 'suioni'],
      },
      matter: {
        filter: ['stuff'],
      },
      story: {
        filter: ['prose', 'other'],
      },
    },
  },
};
console.log('theme', theme);
/* eslint-disable */
//import normalize from 'normalize.css'; not needed cause typography.js is using it already

//   html {
//     height: 100%;    
//   }
    
//   a {
//     color: ${theme.dark};
//     text-decoration: none;
//     transition: all ${theme.transitionTime};
//   }
//   a:hover {
//     color: ${theme.primary};
//   }
//   h1, h2, h3, h4 {
//     color: ${theme.dark};
//   }
//   blockquote {
//     font-style: italic;
//     position: relative;
//   }
//   blockquote:before {
//     content: "";
//     position: absolute;
//     background: ${theme.primary};
//     height: 100%;
//     width: 6px;
//     margin-left: -1.6rem;
//   }
//   label {
//     margin-bottom: .5rem;
//     color: ${theme.dark};
//   }
//   input, textarea {
//     border-radius: .5rem;
//     border: none;
//     background: rgba(0, 0, 0, 0.05);
//     padding: .25rem 1rem;
//     &:focus {
//       outline: none;
//     }
//   }
// `;
/* eslint-enable */
injectGlobal`
  body{
    min-width: 240px;
    min-height: 390px;
  }
`;

const Wrapper = styled.div`
  transition: margin-top 0.1s;
  ${p =>
    p.open
      ? css`
          margin-top: ${rem(2 * sizes.special.navbarHeight)};
        `
      : css`
          margin-top: ${rem(sizes.special.navbarHeight)};
        `};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${colors.grey};
  background: ${colors.paleGrey};
  box-sizing: border-box;
  margin-top: ${rem(50)};
`;

const FooterLink = styled(Link)`
  color: ${colors.grey};
`;

const FooterContent = styled(Content)`
  padding: ${rem(30)} ${rem(20)} ${rem(30)} ${rem(20)};

  ${mediaQueryMinWidthWrap.lg(css`
    padding: ${rem(30)} ${rem(40)} ${rem(30)} ${rem(40)};
  `)};
`;

class TemplateWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSecondNavFolded: true,
      secondNavColor: null,
      isMobileNavFolded: true,
      isWorkOpen: false,
    }; // theme.colors.paleGrey,
  }

  componentWillMount = () => {
    const localTitle = this.getLocalTitle(this.props.location);
    console.log('localTitle', localTitle);
    this.setState({
      isSecondNavFolded: localTitle === 'Home',
    });
  };

  onRouteChange = () => {
    console.log('onRouteChange');
    this.setState({
      isSecondNavFolded: true,
    });
  };

  getLocalTitle = location => {
    const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/';
    const currentPath = location.pathname.replace(pathPrefix, '').replace('/', '');
    let title = '';
    if (currentPath === '') {
      title = 'Home';
    } else if (currentPath === 'tags/') {
      title = 'Tags';
    } else if (currentPath === 'categories/') {
      title = 'Categories';
    } else if (currentPath === 'about/') {
      title = 'About';
    } else if (currentPath.indexOf('posts')) {
      title = 'Article';
    } else if (currentPath.indexOf('tags/')) {
      const tag = currentPath
        .replace('tags/', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf('categories/')) {
      const category = currentPath
        .replace('categories/', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `${capitalize(category)}`;
    }
    return title;
  };

  toggleWork = nextState => {
    this.setState(prevState => ({
      isWorkOpen: nextState || !prevState.isWorkOpen,
    }));
  };

  toggleSecondNav = (secondNavColor, fromWork) => {
    console.log('secondNavColor', 'fromWork', secondNavColor, fromWork);
    const secondNavColorLower = secondNavColor.toLowerCase(); // TODO Error on mainpage becaise ther is no string

    this.setState(prevState => ({
      isSecondNavFolded: prevState.secondNavColor === secondNavColorLower ? !prevState.isSecondNavFolded : false, // close if same,  just change color when different color
      secondNavColor: secondNavColorLower,
      isWorkOpen: fromWork,
      isMobileNavFolded: true,
    }));
  };

  toggleMobileNav = nextState => {
    this.setState(prevState => ({
      isMobileNavFolded: nextState || !prevState.isMobileNavFolded,
    }));
  };

  render() {
    const { children, location, data } = this.props;
    const { isSecondNavFolded, secondNavColor, isMobileNavFolded, isWorkOpen } = this.state;
    console.log('___layout___', 'toggleWork', this.toggleWork);
    return (
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle(location)}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {/* <Navigation /> */}
        {/* <WithIsScrolled>
          {({ isScrolled }) => ( */}
        <Navbar
          transparent={false}
          isSecondNavFolded={isSecondNavFolded}
          onSecondNavToggle={this.toggleSecondNav}
          secondNavColor={secondNavColor}
          isMobileNavFolded={isMobileNavFolded}
          onMobileNavToggle={this.toggleMobileNav}
          navLogo={data.navLogoImgPrimary}
        />
        {/* )}
        </WithIsScrolled> */}
        <Wrapper open={!isSecondNavFolded}>
          {children({
            ...this.props,
            isSecondNavFolded,
            secondNavColor,
            navBarSecondData,
            isWorkOpen,
            toggleWork: this.toggleWork,
          })}
        </Wrapper>
        <Footer>
          <FooterContent hero>
            {' '}
            {'Hosted on ▲ ZEIT Now'}
            <br />
            {'Made with '}
            {' by '}
            <FooterLink inline href="https://twitter.com/glenmaddern">
              @glenmaddern
            </FooterLink>
            {', '}
            <FooterLink inline href="https://twitter.com/mxstbr">
              @mxstbr
            </FooterLink>
            {' & '}
            <FooterLink inline href="https://twitter.com/_philpl">
              @_philpl‬
            </FooterLink>
          </FooterContent>
        </Footer>
      </ThemeProvider>
    );
  }
}

export default TemplateWrapper;

export const pageQuery = graphql`
  query LogoImageQuery {
    navLogoImgPrimary: imageSharp(id: { regex: "/logo_minha_color/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    navLogoImgSecondary: imageSharp(id: { regex: "/logo_galera_color/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;

// export const query = graphql`;
//   query GatsbyImageSampleQuery {
//     file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         resolutions(width: 125, height: 125) {
//           ...GatsbyImageSharpResolutions
//         }
//       }
//     }
//   }
// `;
