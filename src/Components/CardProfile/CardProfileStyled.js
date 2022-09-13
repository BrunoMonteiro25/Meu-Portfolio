import styled from 'styled-components'

export const Card = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(52, 48, 51, 0.39);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 2px solid #dcb6e1;
`

export const FotoContainer = styled.div`
  margin-top: 1rem;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-size: cover;
  }
`

export const Nome = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
`

export const Cargo = styled.h1`
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 10px;
`

export const Tecnologias = styled.div`
  padding: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;

  span {
    font-weight: bold;
  }

  svg {
    font-size: 2rem;
  }
`

export const Sobre = styled.p`
  padding: 0 2rem 2rem 2rem;
  line-height: 1.3;
  font-size: 0.8rem;

  span {
    font-weight: bold;
  }
`
