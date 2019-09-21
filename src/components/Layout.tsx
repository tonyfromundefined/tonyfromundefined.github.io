import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import React from 'react'
import styled from '~/styled'
import Top from './organisms/Top'

config.autoAddCss = false

library.add(fab)
library.add(fal)
library.add(far)
library.add(fas)

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Top />
      <Main>
        {children}
      </Main>
    </Container>
  )
}

const Container = styled.div``

const Main = styled.div``

export default Layout
