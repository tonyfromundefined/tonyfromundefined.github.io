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

  const articles = result
    .data
    .allMarkdownRemark
    .edges
    .map(({ node }) => node)
  
  articles
    .map((article) => {
      createPage({
        path: article.fields.slug,
        component: path.resolve('./src/templates/article.tsx'),
        context: {
          slug: article.fields.slug,
        },
      })
    })
}
