import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import SecondNavbar from '../components/Nav/SecondNavbar';

const Index = ({ data, isSecondNavFolded, secondNavColor, navBarSecondData, isWorkOpen, toggleWork }) => {
  const postEdges = data.allMarkdownRemark.edges;
  console.log('data', data);
  return (
    <div className="index-container">
      <SecondNavbar
        isSecondNavFolded={isSecondNavFolded}
        secondNavColor={secondNavColor || 'transparent'}
        isWorkOpen={isWorkOpen}
        toggleWork={toggleWork}
        // navLogo={data.navLogoImgSecondary}
      >
        <div>haha</div>
      </SecondNavbar>

      <Helmet title={config.siteTitle} />
      <SEO postEdges={postEdges} />
      <PostListing postEdges={postEdges} />
    </div>
  );
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
