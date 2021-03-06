import styled from 'styled-components'

export const Container = styled.div`
  background: var(--gray-100);

  .up {
    display: grid;
    grid-template-columns: repeat(4, 25%);

    @media (max-width: 1080px) {
      grid-template-columns: repeat(2, 50%);
    }
  }

  .down {
    background: var(--gray-200);
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-weight: 400;
      font-size: 0.9rem;
      color: var(--white);
    }
  }
`
export const BoxFooter = styled.div`
  border: 1px solid var(--gray-100);

  display: flex;
  align-items: center;
  flex-direction: column;

  transition: border 0.8s;

  h2 {
    margin-bottom: 2px;
    font-weight: 300;
    font-size: 1.5rem;
    color: var(--gray-500);
  }

  span {
    font-size: 0.7rem;
    margin-bottom: 13px;
    cursor: pointer;
    width: 100%;
    padding-left: 5px;

    display: inline-block;

    transition: color 0.3s;

    &:hover {
      color: var(--purple-500);
    }

    @media (max-width: 1080px) {
      text-align: center;
    }
  }

  .lineFooter {
    height: 1px;
    background: var(--gray-500);
    width: 0%;
    opacity: 0;
    margin-bottom: 10px;
    transition: opacity 0.8s, width 0.4s;
  }

  &:hover {
    border: 1px solid var(--gray-500);
  }
  &:hover .lineFooter {
    width: 90%;
    opacity: 1;
  }
`

export const WrapperFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 300;
    font-size: 0.7rem;
    color: black;
  }

  h3,
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`
