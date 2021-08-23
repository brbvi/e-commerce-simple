import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { Container, BoxModal, Counter, Wrapper } from './style'

import { MdClose } from 'react-icons/md'

export const Modal: React.FC = () => {
  const { title, type, price, closeModal, handlePurchase } = useContext(ModalContext)

  const [quantidade, setQuantidade] = useState(1)
  const [cartPrice, setCartPrice] = useState(1)

  useEffect(() => {
    setCartPrice(quantidade * price)
  }, [quantidade])

  function plus() {
    setQuantidade(quantidade + 1)
  }

  function minus() {
    if (quantidade <= 1) {
      setQuantidade(1)
    } else {
      setQuantidade(quantidade - 1)
    }
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BoxModal>
        <div className="imgProduct">
          <img src="/product.jpg" alt="Product" />
        </div>

        <div className="infoProduct">
          <h2>{title}</h2>
          <p>{type}</p>
          <span>R$ {cartPrice.toFixed(2)}</span>
          <hr />
          <Wrapper>
            <section>
              <h3>Quantidade</h3>
              <Counter>
                <button type="button" onClick={minus}>
                  -
                </button>
                {quantidade}
                <button type="button" onClick={plus}>
                  +
                </button>
              </Counter>
            </section>
            <section>
              {quantidade <= 0 ? (
                <button type="button" className="addCart desactive">
                  Adicionar ao carrinho
                </button>
              ) : (
                <button
                  onClick={() => handlePurchase(cartPrice)}
                  type="button"
                  className="addCart"
                >
                  Adicionar ao carrinho
                </button>
              )}
            </section>
          </Wrapper>
        </div>

        <button type="button" className="closeModal" onClick={closeModal}>
          <MdClose />
        </button>
      </BoxModal>
    </Container>
  )
}
