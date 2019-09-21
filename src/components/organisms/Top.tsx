import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Section from '~/components/atoms/Section'
import styled from '~/styled'

const Top: React.FC = () => {
  return (
    <Section>
      <Container>
        <Logo>
          Undefined<br />
          Coding
        </Logo>
        <Extends>
          <Caption>
            JavaScript로 시작하는<br />
            종합 기술 미디어 채널
          </Caption>
          <Space />
          <Buttons>
            <Button>
              <FontAwesomeIcon icon={['fab', 'github']} fixedWidth />
            </Button>
            <Button>
              <FontAwesomeIcon icon={['fab', 'facebook-f']} fixedWidth />
            </Button>
          </Buttons>
        </Extends>
        <Subscribe>
          <SubscribeEmailInput
            placeholder='이메일로 새소식 받아보기'
          />
          <SubscribeSubmit>
            <FontAwesomeIcon icon={['fal', 'arrow-right']} />
          </SubscribeSubmit>
        </Subscribe>
      </Container>
    </Section>
  )
}

const Container = styled.div`
  display: flex;
  height: 7.5rem;
`

const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  width: 13.75rem;
  box-shadow: 0 0 0 1px #000;
  font-family: 'IBM Plex Sans';
  font-size: 2.1875rem;
  font-weight: 600;
  font-style: italic;
  padding: .5rem;
`

const Extends = styled.div`
  display: flex;
  align-items: flex-end;
  box-shadow: 0 0 0 1px #000;
  flex: 1;
  margin-left: 1px;
  padding: .5rem;
`

const Caption = styled.div`
  font-family: 'IBM Plex Sans';
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.33;
`

const Space = styled.div`
  flex: 1;
`

const Buttons = styled.div``

const Button = styled.a`
  color: #000;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font-size: 1.125rem;
  margin-left: .5rem;
`

const Subscribe = styled.div`
  display: flex;
  height: 2.5rem;
  margin-left: 1px;
  width: 16.25rem;
`

const SubscribeEmailInput = styled.input`
  appearance: none;
  border: 0;
  outline: none;
  background-color: #F8F9FA;
  padding: .75rem;
  font-size: .875rem;
  flex: 1;
  font-family: 'IBM Plex Sans', sans-serif;

  &::placeholder {
    color: #ADB5BD;
  }
`

const SubscribeSubmit = styled.div`
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E9ECEF;
  cursor: pointer;
`

export default Top
