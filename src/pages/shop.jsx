import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import SecondNavbar from '../components/Nav/SecondNavbar';
import { Text } from '../components/Priceline';
import { colors } from '../components/Priceline/theme';

const Shop = ({ data, isSecondNavFolded, secondNavColor, navBarSecondData, isWorkOpen, toggleWork }) => {
  // const postEdges = data.allMarkdownRemark.edges;
  console.log(
    'data, isSecondNavFolded, secondNavColor, navBarSecondData',
    data,
    isSecondNavFolded,
    secondNavColor,
    navBarSecondData
  );
  return (
    <div className="index-container">
      <SecondNavbar
        isSecondNavFolded={isSecondNavFolded}
        secondNavColor={secondNavColor || colors.shop}
        navLogo={data.navLogoImgSecondary}
        isWorkOpen={isWorkOpen}
        toggleWork={toggleWork}
      >
        <Text align="center" color="black" fontSize={4} bold caps>
          Shop
        </Text>
      </SecondNavbar>

      <Helmet title={config.siteTitle} />
      {/* <SEO postEdges={postEdges} /> */}
      {/* <PostListing postEdges={postEdges} /> */}
    </div>
  );
};

export default Shop;

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
