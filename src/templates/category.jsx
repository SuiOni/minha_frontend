import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

const CategoryTemplate = ({ pathContext, data }) => (
  <div className="category-container">
    <Helmet title={`Posts in category "${pathContext.category}" | ${config.siteTitle}`} />
    <PostListing postEdges={data.allMarkdownRemark.edges} />
  </div>
);
export default CategoryTemplate;
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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
