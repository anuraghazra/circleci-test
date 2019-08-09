import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Post from '../components/Post';
import Project from '../components/Project/Project';

import GlobalStyle from '../styles/GlobalStyle'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Blog Posts</h2>
    <GlobalStyle />

    <h2>Side Project</h2>
    <Project />
    <Project />
    <Project />
    <Project />

    {/* <StaticQuery query={indexQuery} render={(data) => {
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post
              key={node.id}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              path={node.fields.slug}
              body={node.excerpt}
              fluid={node.frontmatter.image.childImageSharp.fluid}
            />
          ))}
        </div>
      )
    }} /> */}

  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort : { fields : [frontmatter___date], order : DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            image {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(truncate : true)
        }
      }
    }
  }
`

export default IndexPage
