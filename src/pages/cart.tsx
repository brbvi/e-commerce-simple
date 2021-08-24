import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container, LeftCart, RightCart } from '../styles/cart'

import { IoCartOutline } from 'react-icons/io5'
export const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <LeftCart>
          <div>
            <IoCartOutline fontSize="30" />
            <h1>Carrinho de compras</h1>
          </div>
          <table>
            <thead>
              <th>title</th>
              <th>type</th>
              <th>Quantidade</th>
              <th>Total</th>
            </thead>
            <tr>
              <td>Amendoim torrado com sal</td>
              <td>Amendoins</td>
              <td>5</td>
              <td>45,90</td>
              <td>lix</td>
            </tr>
            <tr>
              <td>Amendoim torrado com sal</td>
              <td>Amendoins</td>
              <td>5</td>
              <td>45,90</td>
              <td>lix</td>
            </tr>
            <tr>
              <td>Amendoim torrado com sal</td>
              <td>Amendoins</td>
              <td>5</td>
              <td>45,90</td>
              <td>lix</td>
            </tr>
            <tr>
              <td>Amendoim torrado com sal</td>
              <td>Amendoins</td>
              <td>5</td>
              <td>45,90</td>
              <td>lix</td>
            </tr>
          </table>
        </LeftCart>
        <RightCart></RightCart>
      </Container>
      <Footer />
    </>
  )
}

export default Cart