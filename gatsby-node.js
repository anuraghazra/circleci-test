const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const SinglePostTemplate = path.resolve('./src/templates/single-post.js');

  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }

  `).then(res => {
    if (res.errors) return Promise.reject(res.errors);

    const posts = res.data.allMarkdownRemark.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: SinglePostTemplate,
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}


// .then(result => {
//   result.data.allMarkdownRemark.edges.forEach(edge => {
//     actions.createPage({
//       path: edge.node.fields.slug,
//       component: ,
//       context: {
//         slug: edge.node.fields.slug
//       }
//     });
//   });
// });