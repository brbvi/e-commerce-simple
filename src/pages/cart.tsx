import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container, LeftCart, RightCart } from '../styles/cart'

import { IoCartOutline } from 'react-icons/io5'

import { BsTrash } from 'react-icons/bs'

export const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <LeftCart>
          <div className="titleCart">
            <IoCartOutline fontSize="50" />
            <h1>Carrinho de compras</h1>
          </div>

          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>type</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tr>
              <td>Amendoim torrado com sal</td>
              <td>Amendoins</td>
              <td>5</td>
              <td>45,90</td>
              <td>
                <button>
                  <BsTrash />
                </button>
              </td>
            </tr>
          </table>
        </LeftCart>
        <RightCart>
          <h1>Total compra</h1>
          <p>R$ 250,00</p>
          <button>Finalizar compra</button>
        </RightCart>
      </Container>
      <Footer />
    </>
  )
}

export default Cart
