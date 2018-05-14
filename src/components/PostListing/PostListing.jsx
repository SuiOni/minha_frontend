import React from 'react';
import Link from 'gatsby-link';

const getPostList = postEdges => {
  const postList = [];
  postEdges.forEach(postEdge => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });
  return postList;
};

const PostListing = ({ postEdges }) => (
  <div>
    {/* Your post list here. */
    getPostList(postEdges).map(post => (
      <Link to={post.path} key={post.title}>
        <h1>{post.title}</h1>
      </Link>
    ))}
  </div>
);

export default PostListing;
