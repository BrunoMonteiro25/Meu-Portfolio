import React from 'react'
import CardProfile from '../CardProfile/CardProfile'
import Header from '../Header/Header'
import Projetos from '../Projetos/Projetos'
import { Container } from './HomeStyled'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <CardProfile />
        <Projetos />
      </Container>
    </>
  )
}

export default Home
