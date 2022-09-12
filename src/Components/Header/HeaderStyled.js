import styled from 'styled-components'

export const Nav = styled.div`
  border-bottom: 1px solid #dcb6e1;

  .container {
    max-width: 70rem;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    padding: 0.5rem;
    border: 3px solid;
    border-radius: 50%;
    font-family: 'Roboto Slab', serif;
  }

  .buttons {
    display: flex;
  }
`

export const ButtonLinkdin = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: #fff;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: #0961b8;
  font-weight: bold;
  max-width: max-content;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background: #0961b8;
    color: #fff;
  }
`

export const ButtonGithub = styled(ButtonLinkdin)`
  color: #000;
  margin-left: 1rem;

  :hover {
    background: #000;
  }
`
