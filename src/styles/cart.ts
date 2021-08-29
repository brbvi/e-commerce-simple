import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  padding: 5rem 2rem;

  @media (max-width: 1080px) {
    grid-template-columns: 100%;
  }
`

export const LeftCart = styled.div`
  .titleCart {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding-left: 6rem;

    h1 {
      font-weight: 300;
      font-size: 1.9rem;
      margin-left: 20px;
    }
    @media (max-width: 1080px) {
      padding-left: 0rem;
      justify-content: center;
    }
  }

  table {
    width: 100%;
    th,
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--gray-100);
    }
    th {
      color: var(--gray-200);
      text-transform: uppercase;
      font: 500 0.75rem Lexend, sans-serif;
      text-align: left;
    }

    td {
      font-weight: 300;
      button {
        width: 2rem;
        height: 2rem;
        border: 1px solid var(--gray-100);
        border-radius: 0.5rem;
        color: red;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          filter: brightness(0.95);
          opacity: 0.8;
        }
      }
    }
    @media (max-width: 1080px) {
      font-size: 75%;
      margin-bottom: 40px;
    }
  }
`

export const RightCart = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  h1 {
    font-weight: 400;
  }

  p {
    margin: 10px 0;
  }

  button {
    background: var(--purple-500);
    color: var(--white);
    font-weight: 700;
    font-size: 0.875rem;
    padding: 1rem 2rem;
    border-radius: 5px;

    &:hover {
      opacity: 0.7;
    }
  }
`
