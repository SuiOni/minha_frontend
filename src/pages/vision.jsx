import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import SecondNavbar from '../components/Nav/SecondNavbar';
import { Text } from '../components/Priceline';
import { colors } from '../components/Priceline/theme';

const Vision = ({ data, isSecondNavFolded, secondNavColor, navBarSecondData, isWorkOpen, toggleWork }) => {
  // const postEdges = data.allMarkdownRemark.edges;
  console.log('data', data);
  return (
    <div className="index-container">
      <SecondNavbar
        isSecondNavFolded={isSecondNavFolded}
        secondNavColor={secondNavColor || colors.vision}
        navLogo={data.navLogoImgSecondary}
        isWorkOpen={isWorkOpen}
        toggleWork={toggleWork}
      >
        <Text align="center" color="black" fontSize={4} bold caps>
          Vision
        </Text>
      </SecondNavbar>

      <Helmet title={config.siteTitle} />
      {/* <SEO postEdges={postEdges} /> */}
    </div>
  );
};

export default Vision;

// /* eslint no-undef: "off" */
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
/* eslint no-undef: "off" */
// export const pageQuery = graphql`
//   query LogoImageQuery {
//     navLogoImgSecondary: imageSharp(id: { regex: "/logo_galera_color/" }) {
//       sizes(maxWidth: 1240) {
//         ...GatsbyImageSharpSizes_tracedSVG
//       }
//     }
//   }
// `;
