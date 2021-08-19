import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const BoxModal = styled.div`
  width: 80%;

  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 2rem;

  position: relative;

  display: grid;
  grid-template-columns: repeat(2, 50%);

  .imgProduct {
    width: 100%;

    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  .infoProduct {
    padding: 0 2rem;

    display: flex;
    flex-direction: column;

    h2 {
      font-size: 3rem;
      font-weight: 200;
      margin-bottom: 0.5rem;
    }

    p {
      font-weight: 300;
      font-size: 0.9rem;
      margin-bottom: 0.9rem;
    }

    span {
      font-weight: 200;
      font-size: 2rem;
      margin-left: auto;
    }

    h3 {
      margin-bottom: 0.5rem;
      font-weight: 300;
    }
  }

  .closeModal {
    position: absolute;
    font-size: 2.5rem;
    top: 0;
    right: 0;
    color: var(--purple-800);

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Counter = styled.div`
  width: 120px;
  background: var(--gray-100);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 30px;
    font-size: 1.8rem;
    background: var(--purple-800);
    color: white;
    font-weight: 800;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`
export const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 50%);

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .addCart {
      width: 100%;
      padding: 1rem 0;
      background-color: var(--purple-800);
      color: white;
      font-weight: 400;
      font-size: 1.2rem;
      border-radius: 5px;
      margin-top: 30px;
    }

    .desactive {
      opacity: 0.5;
      cursor: default;
    }
  }
`
