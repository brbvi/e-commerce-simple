import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 2rem 5rem;
`

export const LeftCart = styled.div`
  div {
    display: flex;
    align-items: center;

    h1 {
      font-weight: 300;
      font-size: 1.5rem;
    }
  }

  table {
    width: 100%;

    thead {
      background: var(--gray-500);
      color: var(--white);
    }

    td {
      text-align: center;
    }
  }
`

export const RightCart = styled.div``
