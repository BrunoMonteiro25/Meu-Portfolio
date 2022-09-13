import React from 'react'
import {
  Cargo,
  Card,
  FotoContainer,
  Nome,
  Sobre,
  Tecnologias,
} from './CardProfileStyled'
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from 'react-icons/di'

import Foto from '../../../src/Assets/foto.jpg'

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
        <span>Sobre mim: </span>Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words.
      </Sobre>
    </Card>
  )
}

export default CardProfile
