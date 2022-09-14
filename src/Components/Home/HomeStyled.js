import styled from 'styled-components'

export const Container = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 54rem) {
    grid-template-columns: 1fr;
    display: grid;
    align-items: center;
    justify-items: center;
  }
`
