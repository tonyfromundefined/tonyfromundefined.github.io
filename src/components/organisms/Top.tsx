import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { rgba } from 'polished'
import React from 'react'
import Section from '~/components/atoms/Section'
import styled, { media } from '~/styled'

const Top: React.FC = () => {
  return (
    <Section>
      <Container>
        <Logo to='/'>
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
            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
          </SubscribeSubmit>
        </Subscribe>
      </Container>
    </Section>
  )
}

const Container = styled.div`
  display: flex;
  min-height: 7.5rem;
  margin-bottom: 1.75rem;

  ${media.lessThan('medium')`
    display: block;
  `}
`

const Logo = styled(Link)`
  display: flex;
  align-items: flex-end;
  width: 13.75rem;
  box-shadow: 0 0 0 1px #000;
  font-family: 'IBM Plex Sans';
  font-size: 2.1875rem;
  font-weight: 600;
  font-style: italic;
  padding: .5rem;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin-right: 1px;

  &:hover {
    background-color: #9775FA;
    box-shadow: 0 0 0 1px #000, 0 0 1rem 0 ${rgba('#9775FA', 0.4)};
  }

  ${media.lessThan('medium')`
    width: 100%;
    margin-right: 0;
    height: 8rem;
  `}
`

const Extends = styled.div`
  display: flex;
  align-items: flex-end;
  box-shadow: 0 0 0 1px #000;
  flex: 1;
  padding: .5rem;
  margin-right: 1px;

  ${media.lessThan('medium')`
    margin-top: 1px;
    margin-bottom: 1px;
    margin-right: 0;
    height: 5rem;
  `}
`

const Caption = styled.div`
  font-family: 'IBM Plex Sans';
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.4;
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
  width: 16.25rem;

  ${media.lessThan('medium')`
    width: 100%;
    box-shadow: 0 1px 0 0 #000;
  `}
`

const SubscribeEmailInput = styled.input`
  appearance: none;
  border: 0;
  outline: none;
  background-color: rgba(255, 255, 255, .5);
  padding: .75rem;
  font-size: .875rem;
  flex: 1;
  font-family: 'IBM Plex Sans', sans-serif;

  &::placeholder {
    color: rgba(0, 10, 20, .8);
  }

  ${media.lessThan('medium')`
    background-color: rgba(0, 0, 0, 0);
  `}
`

const SubscribeSubmit = styled.div`
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  cursor: pointer;
`

export default Top
