import React from 'react'
import styled, { media } from '~/styled'
import Section from './atoms/Section'
import Sidebar, { ISidebarProps } from './organisms/Sidebar'

interface ISectionWithSidebar {
  sidebar: ISidebarProps
}
const SectionWithSidebar: React.FC<ISectionWithSidebar> = ({ children, sidebar }) => {
  return (
    <Section>
      <Container>
        <SidebarWrapper>
          <Sidebar {...sidebar} />
        </SidebarWrapper>
        <Main>
          {children}
        </Main>
      </Container>
    </Section>
  )
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  ${media.lessThan('medium')`
    display: block;
  `}
`

const SidebarWrapper = styled.div`
  width: 13.75rem;
  margin-right: 1px;

  ${media.lessThan('medium')`
    display: block;
    margin-right: 0;
    width: 100%;
    margin-bottom: 1.75rem;
  `}
`

const Main = styled.div`
  flex: 1;
  box-shadow: 0 0 0 1px #000;
`

export default SectionWithSidebar
