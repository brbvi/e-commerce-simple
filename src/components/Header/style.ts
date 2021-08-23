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
    cursor: pointer;
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

    a {
      font-size: 0.875rem;
      text-decoration: none;
      color: var(--gray-50);

      transition: opacity 0.3s;
    }

    &:hover .animationBar {
      width: 100%;
    }

    &:hover a {
      opacity: 0.6;
    }
  }
  @media (max-width: 1080px) {
    .wrapper {
      display: none;
    }
  }
`

export const Carrinho = styled.div`
  margin-left: auto;
  border: 1px solid var(--gray-50);
  border-radius: 4px;
  width: 120px;
  height: 35px;
  padding: 1px;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;

    &:hover {
      opacity: 0.8;
    }
  }

  p {
    margin: 0 5px;
  }
`
