import { graphql } from 'gatsby'
import React from 'react'
import { GetPostQuery } from '../generated/graphql'

interface ITemplatePostProps {
  data: GetPostQuery
}
const TemplatePost: React.FC<ITemplatePostProps> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <h1>{post && post.frontmatter && post.frontmatter.title}</h1>
      {post && post.html &&
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      }
    </div>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default TemplatePost
