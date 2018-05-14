import React from 'react';
import _ from 'lodash';
import Link from 'gatsby-link';

const PostTags = ({ tags }) => (
  <div className="post-tag-container">
    {tags &&
      tags.map(tag => (
        <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${_.kebabCase(tag)}`}>
          <button>{tag}</button>
        </Link>
      ))}
  </div>
);

export default PostTags;
