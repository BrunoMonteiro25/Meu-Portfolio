import React from 'react'
import {
  Cargo,
  Card,
  FotoContainer,
  Nome,
  Sobre,
  Tecnologias,
  BaixarCurriculo,
} from './CardProfileStyled'
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from 'react-icons/di'
import { BsDownload } from 'react-icons/bs'

import Foto from '../../../src/Assets/foto.jpg'
import Curriculo from './curriculo_bruno.pdf'

const CardProfile = () => {
  return (
    <Card>
      <FotoContainer>
        <img src={Foto} />
      </FotoContainer>
      <Nome>Bruno Monteiro</Nome>
      <Cargo>Desenvolvedor Front-end</Cargo>
      <Tecnologias>
        <span>Tecnologias:</span>
        <DiHtml5 style={{ color: '#FF5722' }} />
        <DiCss3 style={{ color: '#0065F4' }} />
        <DiJsBadge style={{ color: '#FFDF00', fontSize: '1.5rem' }} />
        <DiReact style={{ color: '#61DBFB', fontSize: '2.3rem' }} />
      </Tecnologias>
      <Sobre>
        <span>
          Sobre mim: <br></br>
        </span>
        Apaixonado por tecnologia, atualmente aperfeiçoando meus conhecimentos
        técnicos em desenvolvimento front-end com as tecnologias Javascript e
        ReactJS.
      </Sobre>
      <BaixarCurriculo
        href={Curriculo}
        download="curriculo_bruno.pdf"
        type="appication/pdf"
      >
        <BsDownload style={{ fontSize: '1.2rem' }} />
        Download CV
      </BaixarCurriculo>
    </Card>
  )
}

export default CardProfile
