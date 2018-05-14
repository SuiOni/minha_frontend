import React from 'react';
import Helmet from 'react-helmet';
import GatsbyLink from 'gatsby-link';

import PostListing from '../../../components/PostListing/PostListing';
import SEO from '../../../components/SEO/SEO';
import config from '../../../../data/SiteConfig';
import SecondNavbar from '../../../components/Nav/SecondNavbar';
import { Text } from '../../../components/Priceline';
import NavSeperatorLine from '../../../components/Nav/NavSeparatorLine';
import NavLink from '../../../components/Nav/NavLink';
import { colors } from '../../../components/Priceline/theme';

const Stills = ({ data, isSecondNavFolded, secondNavColor, navBarSecondData, navLogo, isWorkOpen, toggleWork }) => {
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
        secondNavColor={secondNavColor || colors.work}
        navLogo={data.navLogoImgSecondary}
        isWorkOpen={isWorkOpen}
        toggleWork={toggleWork}
      >
        <GatsbyLinkStyled to="/work/stills/photos" color="black" onClick={() => onItemClick(colors.vision)}>
          <Text align="center" color="black" fontSize={2} bold caps>
            Photos
          </Text>
        </GatsbyLinkStyled>
        <NavSeperatorLine />
        <GatsbyLinkStyled to="/work/stills/graphics" color="black" onClick={() => onItemClick(colors.vision)}>
          <Text align="center" color="black" fontSize={2} bold caps>
            Graphics
          </Text>
        </GatsbyLinkStyled>
        <NavSeperatorLine />
        <GatsbyLinkStyled to="/work/stills/drawings" color="black" onClick={() => onItemClick(colors.vision)}>
          <Text align="center" color="black" fontSize={2} bold caps>
            Drawings
          </Text>
        </GatsbyLinkStyled>
      </SecondNavbar>

      <Helmet title={config.siteTitle} />
      {/* <SEO postEdges={postEdges} /> */}
      {/* <PostListing postEdges={postEdges} /> */}
    </div>
  );
};

export default Stills;

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
