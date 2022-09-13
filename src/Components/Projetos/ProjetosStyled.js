import styled from 'styled-components'

export const MeusProjetos = styled.div`
  border: 1px solid #fff;
  color: #fff;
  padding: 1rem;
  height: max-content;
  background: rgba(52, 48, 51, 0.39);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 2px solid #dcb6e1;
`

export const TituloProjeto = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  padding-bottom: 1rem;
`

export const Projeto = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  margin-bottom: 2rem;

  &::after {
    content: '';
    width: 200px;
    border-bottom: 2px solid #dcb6e1;
  }
`

export const ContainerImg = styled.div`
  img {
    width: 200px;
    height: 150px;
    background-size: cover;
    border-radius: 1rem;
  }
`

export const Imagem = styled.img`
  max-width: 200px;
  height: 150px;
  background-size: cover;
  border-radius: 1rem;
  border: 1px solid white;
`

export const SobreContainer = styled.div`
  font-size: 0.8rem;
  display: grid;
  gap: 0.3rem;
`

export const Titulo = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
`

export const TecnologiasUsadas = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  margin-top: 1rem;
  line-height: 1.4;

  span {
    font-size: 1rem;
  }
`

export const Botoes = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  margin-top: 1rem;
`

export const Demo = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: #26569d;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  max-width: max-content;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background: #0975b8;
  }
`

export const Repositorio = styled(Demo)`
  background: #000;
  color: #fff;
  margin-left: 1rem;

  :hover {
    background: #222;
  }
`
