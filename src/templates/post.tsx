import { graphql } from 'gatsby'
import React from 'react'
import Section from '~/components/atoms/Section'
import Layout from '~/components/Layout'
import { authors, IAuthor } from '~/constants'
import styled from '~/styled'
import { GetPostTemplateQuery } from '../generated/graphql'

interface ITemplatePostProps {
  data: GetPostTemplateQuery
}
const TemplatePost: React.FC<ITemplatePostProps> = ({ data }) => {
  const { post } = data

  if (
    !post ||
    !post.frontmatter ||
    !post.frontmatter.title ||
    !post.frontmatter.author ||
    !post.html
  ) {
    return <div>error</div>
  }

  return (
    <Layout>
      <PostContainer>
        <Section>
          <Title>
            <FloatingCaption>제목</FloatingCaption>
            {post.frontmatter.title}
          </Title>
        </Section>
        <Section>
          <Authors>
            <FloatingCaption>글쓴이</FloatingCaption>
            {post.frontmatter.author.map((username, index) => {
              const author = authors.find((author) => author.username === username)

              if (!author) { return null }

              return (
                <Author
                  key={index}
                  {...author}
                />
              )
            })}
          </Authors>
        </Section>
        <Section>
          <ContentContainer>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </ContentContainer>
        </Section>
      </PostContainer>
    </Layout>
  )
}

const PostContainer = styled.div`
  margin-top: 3.5rem;
`

const FloatingCaption = styled.div`
  font-size: .875rem;
  position: absolute;
  top: .25rem;
  left: 0;
`

const Title = styled.div`
  font-size: 2.125rem;
  font-weight: 500;
  position: relative;
  padding: 0 5.625rem;
  margin-bottom: 3rem;
`

const Authors = styled.div`
  position: relative;
  padding: 0 8.75rem;
  margin-bottom: 2rem;
`

const ContentContainer = styled.div`
  padding: 0 8.75rem;
  line-height: 1.5625;
`

const Author: React.FC<IAuthor> = (props) => {
  return (
    <AuthorContainer>
      <AuthorAvatar />
      <AuthorRight>
        <AuthorNames>
          <AuthorDisplayName>{props.displayName}</AuthorDisplayName>
          <AuthorUsername>@{props.username}</AuthorUsername>
        </AuthorNames>
        <AuthorIntroduction>
          {props.introduction}
        </AuthorIntroduction>
      </AuthorRight>
    </AuthorContainer>
  )
}

const AuthorContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

const AuthorAvatar = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 2.25rem;
  background: #E9ECEF;
  margin-right: 1rem;
`

const AuthorRight = styled.div`
  flex: 1;
`

const AuthorNames = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .625rem;
`

const AuthorDisplayName = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
  margin-right: .75rem;
`

const AuthorUsername = styled.div`
  font-size: .875rem;
`

const AuthorIntroduction = styled.div`
  font-size: .875rem;
  line-height: 1.33;
`

export const query = graphql`
  query getPostTemplate($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`

export default TemplatePost
