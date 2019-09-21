const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({
  actions: { createNodeField },
  getNode,
  node,
}) => {
  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const slug = createFilePath({
        node,
        getNode,
        basePath: 'pages',
      })
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      })

      break
    }
  }
}

exports.createPages = async ({
  actions: { createPage },
  graphql,
}) => {
  const result = await graphql(`
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
  `)

  const posts = result
    .data
    .allMarkdownRemark
    .edges
    .map(({ node }) => node)
  
  posts
    .map((post) => {
      createPage({
        path: post.fields.slug,
        component: path.resolve('./src/templates/post.tsx'),
        context: {
          slug: post.fields.slug,
        },
      })
    })
}
