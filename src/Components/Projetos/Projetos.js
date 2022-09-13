import React from 'react'
import {
  Botoes,
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
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projetos = () => {
  return (
    <MeusProjetos>
      <TituloProjeto>Meus Projetos</TituloProjeto>
      <Projeto>
        <Imagem src={Dogs} alt="Dogs" />
        <SobreContainer>
          <Titulo>Projeto Dogs</Titulo>
          Uma rede social tipo instagram, mas para cachorros.
          <TecnologiasUsadas>
            <span>Tecnologias usadas: </span>HTML5, CSS3 (FlexBox e CSS Grid),
            JavaScript, ReactJS.
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
    </MeusProjetos>
  )
}

export default Projetos
