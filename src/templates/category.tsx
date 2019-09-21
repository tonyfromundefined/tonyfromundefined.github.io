import { graphql } from 'gatsby'
import React from 'react'
import Layout from '~/components/Layout'
import PostListItem from '~/components/molecules/PostListItem'
import SectionWithSidebar from '~/components/SectionWithSidebar'
import { GetCategoryTemplateQuery } from '../generated/graphql'

interface ITemplateCategoryProps {
  data: GetCategoryTemplateQuery
}
const TemplateCategory: React.FC<ITemplateCategoryProps> = ({ data }) => {
  return (
    <Layout>
      <SectionWithSidebar
        sidebar={{
          categories: data.categories.group
            .filter((group) => (
              typeof group.name !== 'undefined' &&
              group.name !== null
            ))
            .map(({ name, count }) => ({
              name: name!,
              count,
            })),
          tags: data.tags.group
            .filter((group) => (
              typeof group.name !== 'undefined' &&
              group.name !== null
            ))
            .map(({ name }) => ({
              name: name!,
            })),
        }}
      >
        {data.posts.nodes.map((post) => (
          post.frontmatter &&
          post.frontmatter.title &&
          post.frontmatter.author &&
          post.frontmatter.date &&
          post.fields &&
          post.fields.slug
        ) && (
          <PostListItem
            key={post.fields.slug}
            title={post.frontmatter.title}
            authorName={post.frontmatter.author.join(', ')}
            createdAt={new Date(post.frontmatter.date)}
            slug={post.fields.slug}
          />
        ))}
      </SectionWithSidebar>
    </Layout>
  )
}

export const query = graphql`
  query getCategoryTemplate($category: String) {
    posts: allMarkdownRemark(
      limit: 5000,
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { category: { in: [$category] }}},
    ) {
      nodes {
        frontmatter {
          title
          date
          author
        }
        fields {
          slug
        }
      }
    }
    categories: allMarkdownRemark(limit: 5000) {
      group(field: frontmatter___category) {
        name: fieldValue
        count: totalCount
      }
    }
    tags: allMarkdownRemark(limit: 5000) {
      group(field: frontmatter___tags) {
        name: fieldValue
      }
    }
  }
`

export default TemplateCategory
