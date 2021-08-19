import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const HeaderUp = styled.div`
  background: var(--purple-800);
  color: white;
  padding: 0.5rem 5rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    margin-left: 10px;
  }
`

export const HeaderDown = styled.div`
  background: var(--purple-500);
  padding: 0.5rem 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-right: 3rem;
    padding-right: 3rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--gray-200);
    border-right: 1px solid var(--gray-200);
  }

  a {
    font-size: 0.875rem;
    text-decoration: none;
    color: var(--gray-50);

    transition: opacity 0.3s;
  }

  .animationBar {
    width: 0%;
    height: 1px;
    background: var(--gray-50);
    cursor: pointer;

    transition: width 0.3s;
  }

  .wrapper {
    margin-right: 3rem;

    &:hover .animationBar {
      width: 100%;
    }

    &:hover a {
      opacity: 0.6;
    }
  }
`

export const Carrinho = styled.div`
  margin-left: auto;
  color: white;
  border: 1px solid var(--gray-50);
  border-radius: 4px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0 5px;
  }
`
