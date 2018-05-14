import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

const TagTemplate = ({ pathContext, data }) => (
  <div className="tag-container">
    <Helmet title={`Posts tagged as "${pathContext.tag}" | ${config.siteTitle}`} />
    {/* <PostListing postEdges={pathContext.allMarkdownRemark.edges} /> */}
  </div>
);

export default TagTemplate;
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
