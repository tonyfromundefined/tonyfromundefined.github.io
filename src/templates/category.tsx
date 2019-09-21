import { graphql } from 'gatsby'
import React from 'react'
import { GetPostsByCategoryQuery } from '../generated/graphql'

interface ITemplateCategoryProps {
  data: GetPostsByCategoryQuery
}
const TemplateCategory: React.FC<ITemplateCategoryProps> = ({ data }) => {
  return (
    <div />
  )
}

export const query = graphql`
  query getPostsByCategory($category: String) {
    allMarkdownRemark(
      limit: 5000,
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { category: { in: [$category] }}},
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default TemplateCategory
