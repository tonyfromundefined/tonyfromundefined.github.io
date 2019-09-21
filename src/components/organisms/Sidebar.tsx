import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { rgba } from 'polished'
import React from 'react'
import styled from '~/styled'

export interface ISidebarProps {
  categories: Array<{
    name: string,
    count: number,
  }>
  tags: Array<{
    name: string,
  }>
}
const Sidebar: React.FC<ISidebarProps> = ({ categories, tags }) => {
  return (
    <Container>
      <Box>
        <Title>
          <FontAwesomeIcon icon={['fas', 'list']} fixedWidth />
          CATEGORIES
        </Title>
        <Categories>
          {categories.map((category) => (
            <CategoryLink
              key={category.name}
              to={`/categories/${category.name}`}
              activeClassName='active'
            >
              {category.name}
              <CategoryLinkTag>{category.count}</CategoryLinkTag>
            </CategoryLink>
          ))}
        </Categories>
      </Box>
      <Box>
        <Title>
          <FontAwesomeIcon icon={['fas', 'tags']} fixedWidth />
          TAGS
        </Title>
        <Tags>
          {tags.map((tag) => (
            <TagLink
              key={tag.name}
              to={`/tags/${tag.name}`}
              activeClassName='active'
            >
              {tag.name}
            </TagLink>
          ))}
        </Tags>
      </Box>
    </Container>
  )
}

const Container = styled.div``

const Box = styled.div`
  box-shadow: 0 0 0 1px #000;
  padding: .75rem;
  margin-bottom: 1px;
`

const Title = styled.div`
  font-size: .75rem;
  font-family: 'IBM Plex Sans';
  font-weight: 700;
  margin-bottom: .5rem;

  svg {
    margin-right: .25rem;
  }
`

const Categories = styled.div`
  margin-bottom: -.375rem;
`

interface ICategoryLinkProps {
  active?: boolean
}
const CategoryLink = styled(Link)<ICategoryLinkProps>`
  display: block;
  font-size: .9375rem;
  padding: .375rem;
  margin: 0 -.375rem;
  cursor: pointer;
  position: relative;
  color: #000;
  text-decoration: none;
  border-radius: 1px;

  &:hover {
    background-color: #69DB7C;
    box-shadow: 0 0 .5rem 0 ${rgba('#69DB7C', 0.4)};
    color: #000;
  }

  &.active {
    color: #fff;
    background-color: #000;
    font-weight: 500;

    &:hover {
      color: #fff;
      background-color: #000;
      box-shadow: none;
    }
  }
`

const CategoryLinkTag = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: .375rem;
  font-size: .75rem;
  font-weight: 400;
`

const Tags = styled.div`
  margin-bottom: -.375rem;
  margin-top: .8125rem;
`

const TagLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #343A40;
  font-size: .8125rem;
  background-color: #E9ECEF;
  margin-right: .375rem;
  margin-bottom: .375rem;
  padding: .25rem .375rem;
  border-radius: 1px;

  &:hover {
    background-color: #CED4DA;
    box-shadow: 0 0 .5rem 0 ${rgba('#CED4DA', 0.4)};
    color: #000;
  }

  &.active {
    background-color: #000;
    font-weight: 500;
    color: #fff;
    box-shadow: none;
  }
`

export default Sidebar
