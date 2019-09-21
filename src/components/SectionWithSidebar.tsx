import React from 'react'
import styled from '~/styled'
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
`

const SidebarWrapper = styled.div`
  width: 13.75rem;
`

const Main = styled.div`
  flex: 1;
  margin-left: 1px;
  box-shadow: 0 0 0 1px #000;
`

export default SectionWithSidebar
