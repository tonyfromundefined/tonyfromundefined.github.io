import { graphql } from 'gatsby'
import React from 'react'
import { GetArticleQuery } from '../generated/graphql'

interface ITemplateArticleProps {
  data: GetArticleQuery
}
const TemplateArticle: React.FC<ITemplateArticleProps> = ({ data }) => {
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
  query getArticle($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default TemplateArticle
