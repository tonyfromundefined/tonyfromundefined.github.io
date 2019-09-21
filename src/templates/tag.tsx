import { graphql } from 'gatsby'
import React from 'react'
import { GetPostsByTagQuery } from '../generated/graphql'

interface ITemplateTagProps {
  data: GetPostsByTagQuery
}
const TemplateTag: React.FC<ITemplateTagProps> = ({ data }) => {
  return (
    <div />
  )
}

export const query = graphql`
  query getPostsByTag($tag: String) {
    allMarkdownRemark(
      limit: 5000,
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { tags: { in: [$tag] }}},
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

export default TemplateTag
