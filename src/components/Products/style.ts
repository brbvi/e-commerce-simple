import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

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
  padding: 0 7rem;
  width: 100%;

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
    .lineBack {
      width: 70%;
      height: 1px;
      border-radius: 1px;
      background: var(--gray-200);

      position: absolute;
      top: 38px;
    }
  }

  .all {
    width: 100%;
    margin: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    button {
      border: 1px solid var(--gray-200);
      background: var(--gray-50);
      color: rgba(128, 128, 128, 0.5);
      font-size: 1rem;
      padding: 0.5rem 0.7rem;
      z-index: 5;
      border-radius: 5px;

      transition: color 0.3s;

      &:hover {
        color: rgba(128, 128, 128, 1);
      }
    }

    .lineBackAll {
      width: 50%;
      height: 1px;
      border-radius: 1px;
      background: var(--gray-200);

      position: absolute;
      top: 20px;
    }
  }

  @media (max-width: 1080px) {
    padding: 0 1rem;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 50%);
  }
`
export const BoxParallax = styled.div`
  width: 100%;

  .textParallax {
    @media (max-width: 1080px) {
      h2,
      p {
        text-align: center;
      }
    }
    width: 100%;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 3rem;
      font-weight: 300;
    }
    p {
      font-size: 2rem;
      font-weight: 200;
      color: black;
    }
  }
`

export const WrapperParallax = styled.div`
  @media (max-width: 1080px) {
    padding: 0 1rem;
  }

  padding: 0 7rem;

  .insideParallax {
    width: 100%;
    height: 400px;
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 4rem;
      font-weight: 300;
      color: var(--gray-50);
    }
    p {
      font-size: 1.5rem;
      font-weight: 200;
      margin: 19px 0;
      color: var(--gray-50);
    }
    button {
      width: 200px;
      height: 50px;
      border: 2px solid white;
      border-radius: 5px;
      color: var(--gray-50);

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      transition: background 0.2s;

      &:hover {
        background: var(--purple-800);
      }
    }
    @media (max-width: 1080px) {
      h2,
      p {
        text-align: center;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }

  .groupFotos {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    margin: 20px 0;

    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    img {
      width: 95%;
      height: 160px;
      margin-bottom: 10px;
    }

    @media (max-width: 1080px) {
      grid-template-columns: repeat(2, 50%);
    }
  }
`
