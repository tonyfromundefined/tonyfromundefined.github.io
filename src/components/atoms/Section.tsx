import React from 'react'
import styled from '~/styled'

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
`

export default Section
