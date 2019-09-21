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
  const { data: { posts: { edges: postEdges }}} = await graphql(`
    query {
      posts: allMarkdownRemark {
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

  postEdges
    .map(({ node }) => node)
    .map((post) => {
      createPage({
        path: post.fields.slug,
        component: path.resolve('./src/templates/post.tsx'),
        context: {
          slug: post.fields.slug,
        },
      })
    })
  
  const { data: { tagsGroup: { group: tagEdges }}} = await graphql(`
    query {
      tagsGroup: allMarkdownRemark(limit: 5000) {
        group(field: frontmatter___tags) {
          node: fieldValue
        }
      }
    }
  `)

  tagEdges
    .map(({ node }) => node)
    .map((tag) => {
      createPage({
        path: `/tags/${tag}`,
        component: path.resolve('./src/templates/tag.tsx'),
        context: {
          tag,
        },
      })
    })
  
  const { data: { tagsGroup: { group: categoryEdges }}} = await graphql(`
    query {
      tagsGroup: allMarkdownRemark(limit: 5000) {
        group(field: frontmatter___category) {
          node: fieldValue
        }
      }
    }
  `)

  categoryEdges
    .map(({ node }) => node)
    .map((category) => {
      createPage({
        path: `/categories/${category}`,
        component: path.resolve('./src/templates/category.tsx'),
        context: {
          category,
        },
      })
    })
}
