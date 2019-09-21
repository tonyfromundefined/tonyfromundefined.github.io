import { graphql } from 'gatsby'
import React from 'react'
import Layout from '~/components/Layout'
import PostListItem from '~/components/molecules/PostListItem'
import SectionWithSidebar from '~/components/SectionWithSidebar'
import { GetIndexPageQuery } from '~/generated/graphql'

interface IPageIndexProps {
  data: GetIndexPageQuery
}
const PageIndex: React.FC<IPageIndexProps> = ({ data }) => {
  return (
    <Layout>
      <SectionWithSidebar
        sidebar={{
          totalCount: data.posts.totalCount,
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
  query getIndexPage {
    posts: allMarkdownRemark {
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
      totalCount
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

export default PageIndex
