import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

function SinglePost({ data }) {
  const post = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <SEO title={post.title}/>

      <h1>{post.title}</h1>
      <div>
        <small>{post.date} by {post.author}</small>
        <div dangerouslySetInnerHTML={{__html : data.markdownRemark.html}} />
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: {slug : {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`

export default SinglePost;