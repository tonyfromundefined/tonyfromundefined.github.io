import React from 'react'
import styled, { media } from '~/styled'

const Section: React.FC = ({ children }) => {
  return (
    <Flex>
      <Center>
        {children}
      </Center>
    </Flex>
  )
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const Center = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 0 1rem;

  ${media.lessThan('medium')`
    margin: 0;
  `}
`

export default Section
