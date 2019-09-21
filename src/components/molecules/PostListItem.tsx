import { Link } from 'gatsby'
import moment from 'moment'
import { rgba } from 'polished'
import React from 'react'
import styled from '~/styled'

interface IPostListItemProps {
  title: string
  authorName: string
  createdAt: Date
  slug: string
}
const PostListItem: React.FC<IPostListItemProps> = (props) => {
  return (
    <Container to={props.slug}>
      <Title>{props.title}</Title>
      <Captions>
        <Caption>by {props.authorName}</Caption>
        <Caption>{moment(props.createdAt).fromNow()}</Caption>
      </Captions>
    </Container>
  )
}

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  word-break: keep-all;
  line-height: 1.33;
  margin-bottom: .375rem;
  color: #000;
`

const Captions = styled.div`
  display: flex;
  font-size: .875rem;
`

const Caption = styled.div`
  &::after {
    content: '·';
    margin: 0 .25rem;
  }

  &:last-of-type {
    &::after {
      display: none;
    }
  }
`

const Container = styled(Link)`
  display: block;
  padding: 1rem;
  box-shadow: 0 1px 0 0 #000;
  cursor: pointer;
  margin-bottom: 1px;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #FCC419;
    box-shadow: 0 1px 0 0 #000, 0 0 1rem 0 ${rgba('#FCC419', 0.4)};

    ${Title} {
      color: #000;
      /* text-decoration: underline; */
    }
  }

  &:last-of-type {
    box-shadow: none;
    margin-bottom: 0;
  }
`

export default PostListItem
