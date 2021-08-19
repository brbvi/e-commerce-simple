import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid var(--gray-200);
  border-radius: 3px;
  margin: 0.5rem;

  transition: border 0.1s;

  img {
    width: 100%;
  }

  &:hover {
    border: 1px solid var(--purple-500);
  }
`

export const BoxProduct = styled.div`
  padding: 0.3rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  h2 {
    margin-top: 0.5rem;
    font-weight: 300;
    font-size: 1.4rem;
    color: var(--gray-800);
  }

  p {
    margin: 0.5rem 0 0.5rem 0;
    font-weight: 300;
    font-size: 0.9rem;
    color: var(--gray-500);
  }

  span {
    margin: 0.5rem 0;
    color: var(--gray-800);
    font-weight: 800;
    font-size: 1.1rem;
  }

  button {
    background: var(--purple-500);
    color: var(--gray-50);
    padding: 0.5rem 0.8rem;
    border-radius: 10px;
    margin-bottom: 1rem;

    transition: border-radius 0.3s, opacity 0.3s;

    &:hover {
      opacity: 0.8;
      border-radius: 4px;
    }
  }
`
