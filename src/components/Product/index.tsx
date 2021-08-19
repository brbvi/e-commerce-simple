import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

import { BoxProduct, Container } from './style'

export const Product: React.FC<App.Product> = ({ title, type, price }) => {
  const { openModal, getInfo } = useContext(ModalContext)

  function handleClick() {
    openModal()
    getInfo({ title, type, price })
  }

  return (
    <Container>
      <img src="/product.jpg" alt="Produto" />
      <BoxProduct>
        <h2>{title}</h2>
        <p>{type}</p>
        <span>R$ {price}</span>
        <button type="button" onClick={handleClick}>
          Ver produto
        </button>
      </BoxProduct>
    </Container>
  )
}
