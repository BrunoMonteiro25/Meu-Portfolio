import React from 'react'
import { ButtonGithub, ButtonLinkdin, Nav } from './HeaderStyled'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <Nav>
        <div className="container">
          <div className="logo">
            <h2>BM</h2>
          </div>
          <div className="buttons">
            <ButtonLinkdin href="https://www.google.com/" target="_blank">
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
          </div>
        </div>
      </Nav>
    </>
  )
}

export default Header
