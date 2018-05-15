import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import SecondNavbar from '../components/Nav/SecondNavbar';
import styled from 'styled-components';
import bgVid from '../media/vid/kyrl-touch-small.mp4';
import coverVid from '../media/vid/cover-vid.mp4';
import coverImg from '../media/vid/cover-img.png';

import theme, { mediaQueryMinWidthWrap, sizes, colors } from '../components/Priceline/theme';
import rem from '../utils/rem';

const VideoBG = styled.video`
  min-width: 100%;
  background: black;
  position: absolute;
  margin-top: ${rem(0.5 * sizes.special.navbarHeight)};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  width: 100vh;
  height: calc(100vh - ${rem(sizes.special.navbarHeight)});
  z-index: -99;
`;

const Index = ({ data, isSecondNavFolded, secondNavColor, navBarSecondData, isWorkOpen, toggleWork }) => {
  // const postEdges = data.allMarkdownRemark.edges;
  console.log('data', data);
  return (
    <div className="index-container">
      {/* // navLogo={data.navLogoImgSecondary} */}
      <SecondNavbar
        isSecondNavFolded={isSecondNavFolded}
        secondNavColor={secondNavColor || 'transparent'}
        isWorkOpen={isWorkOpen}
        toggleWork={toggleWork}
      >
        <div>haha</div>
      </SecondNavbar>
      <Helmet title={config.siteTitle} />
      {/* <SEO postEdges={postEdges} /> */}
      {/* <PostListing postEdges={postEdges} /> */}
      <VideoBG autoPlay muted loop id="myVideo" poster={coverVid}>
        <source src={bgVid} type="video/mp4" />
      </VideoBG>
    </div>
  );
};

export default Index;

/* eslint no-undef: "off" */
// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             cover
//             date
//           }
//         }
//       }
//     }
//   }
// `;
