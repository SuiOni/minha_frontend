import React from 'react';
import Helmet from 'react-helmet';
import GatsbyLink from 'gatsby-link';

import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import SecondNavbar from '../components/Nav/SecondNavbar';
import NavLink from '../components/Nav/NavLink';
import NavSeperatorLine from '../components/Nav/NavSeparatorLine';
import { Text } from '../components/priceline-styled-system';
import { colors } from '../components/priceline-styled-system/theme';

const Project = ({ data, isSecondNavFolded, secondNavColor, navBarSecondData, isWorkOpen, toggleWork }) => {
  // const postEdges = data.allMarkdownRemark.edges;
  console.log(
    'data, isSecondNavFolded, secondNavColor, navBarSecondData',
    data,
    isSecondNavFolded,
    secondNavColor,
    navBarSecondData
  );
  const GatsbyLinkStyled = NavLink.withComponent(GatsbyLink);

  return (
    <div className="index-container">
      <SecondNavbar
        isSecondNavFolded={isSecondNavFolded}
        secondNavColor={secondNavColor || colors.projects}
        navLogo={data.navLogoImgSecondary}
        isWorkOpen={isWorkOpen}
        toggleWork={toggleWork}
      >
        <GatsbyLinkStyled to="/projects/homegrown" color="black">
          <Text align="center" fontSize={2} bold caps>
            Homegrown
          </Text>
        </GatsbyLinkStyled>
        <NavSeperatorLine />
        <GatsbyLinkStyled to="/projects/collab" color="black">
          <Text align="center" fontSize={2} bold caps>
            Collab
          </Text>
        </GatsbyLinkStyled>
      </SecondNavbar>

      <Helmet title={config.siteTitle} />
      {/* <SEO postEdges={postEdges} /> */}
      {/* <PostListing postEdges={postEdges} /> */}
    </div>
  );
};

export default Project;

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
