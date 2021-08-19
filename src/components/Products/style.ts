import styled from 'styled-components'

export const Container = styled.div``

export const SquareGalery = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 60px;
  img {
    width: 100vw;
    height: 350px;
    object-fit: cover;
    margin: 0 40px;
    border-radius: 3px;
    transition: transform 0.2s;
  }
`

export const BoxProducts = styled.div`
  width: 100%;
  padding: 0 7rem;

  .title {
    width: 100%;
    margin: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    h1 {
      font-weight: 200;
      padding: 0 0.5rem;
      font-size: 3.5rem;
      background-color: var(--gray-50);
      z-index: 5;
    }
  }

  .lineBack {
    width: 70%;
    height: 1px;
    border-radius: 1px;
    background: var(--gray-200);

    position: absolute;
    top: 38px;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
`
