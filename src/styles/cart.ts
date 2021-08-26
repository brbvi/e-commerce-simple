import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  padding: 2rem 5rem;
`

export const LeftCart = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    h1 {
      font-weight: 300;
      font-size: 1.7rem;
    }
  }

  table {
    width: 100%;

    margin: 6rem 0rem;
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
  }
`

export const RightCart = styled.div``
