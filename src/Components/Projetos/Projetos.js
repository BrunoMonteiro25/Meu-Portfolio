import React from 'react'
import {
  Botoes,
  ContainerImg,
  Demo,
  Imagem,
  MeusProjetos,
  Projeto,
  Repositorio,
  SobreContainer,
  TecnologiasUsadas,
  Titulo,
  TituloProjeto,
} from './ProjetosStyled'
import Dogs from '../../../src/Assets/dogs.png'
import Portfolio from '../../../src/Assets/portfolio.png'
import Filmes from '../../../src/Assets/movies.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projetos = () => {
  const projetos = [
    {
      id: 1,
      imagem: `${Portfolio}`,
      titulo: 'Projeto Portfólio',
      sobre: 'Meu portfólio pessoal feito em React com Styled Components.',
      tecnologias:
        'HTML5, CSS3 (FlexBox e CSS Grid), JavaScript, ReactJS e Styled Components',
    },
    {
      id: 2,
      imagem: `${Filmes}`,
      titulo: 'Projeto Movies',
      sobre:
        'Lista de filmes populares, consumida da API gratuita, The Movies DB.',
      tecnologias:
        'HTML5, CSS3 (FlexBox e CSS Grid), JavaScript, ReactJS e Styled Components',
    },
    {
      id: 3,
      imagem: `${Dogs}`,
      titulo: 'Projeto Dogs',
      sobre: 'Uma rede social tipo instagram, mas para cachorros.',
      tecnologias: 'HTML5, CSS3 (FlexBox e CSS Grid), JavaScript, ReactJS',
    },
  ]

  return (
    <MeusProjetos>
      <TituloProjeto>Meus Projetos</TituloProjeto>
      {projetos.map((projeto) => {
        return (
          <Projeto>
            <ContainerImg>
              <img src={projeto.imagem} alt={projeto.titulo} />
            </ContainerImg>
            <SobreContainer>
              <Titulo>{projeto.titulo}</Titulo>
              {projeto.sobre}
              <TecnologiasUsadas>
                <span>Tecnologias usadas: </span>
                {projeto.tecnologias}
              </TecnologiasUsadas>
              <Botoes>
                <Demo>
                  <FaExternalLinkAlt />
                  Demo
                </Demo>
                <Repositorio>
                  <FaGithub />
                  Repositório
                </Repositorio>
              </Botoes>
            </SobreContainer>
          </Projeto>
        )
      })}
    </MeusProjetos>
  )
}

export default Projetos
