import React from 'react'
import {
  ButtonGithub,
  ButtonLinkdin,
  Buttons,
  Logo,
  Nav,
  NavContainer,
} from './HeaderStyled'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo>
            <h2>BM</h2>
          </Logo>
          <Buttons className="moz">
            <ButtonLinkdin
              href="https://www.linkedin.com/in/bruno-monteiro-796430252/"
              target="_blank"
            >
              <FaLinkedin />
              Linkedin
            </ButtonLinkdin>
            <ButtonGithub
              href="https://github.com/BrunoMonteiro25"
              target="_blank"
            >
              <FaGithub />
              Github
            </ButtonGithub>
          </Buttons>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Header
