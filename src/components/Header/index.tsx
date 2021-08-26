import { Container, HeaderUp, HeaderDown, Carrinho } from './style'

import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import Link from 'next/link'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

export const Header: React.FC = () => {
  const { totalPrice } = useContext(ModalContext)

  return (
    <Container>
      <HeaderUp>
        <FaWhatsapp fontSize="21" />
        <span>+55 11 98765-4321</span>
      </HeaderUp>
      <HeaderDown>
        <Link href="/">
          <h1>ECOMMERCE</h1>
        </Link>

        <div className="wrapper">
          <Link href="/allProducts">
            <a>Todos os produtos</a>
          </Link>
          <div className="animationBar" />
        </div>
        <div className="wrapper">
          <Link href="/">
            <a>Categorias</a>
          </Link>
          <div className="animationBar" />
        </div>
        <div className="wrapper">
          <Link href="/">
            <a>SubCategorias</a>
          </Link>
          <div className="animationBar" />
        </div>
        <Carrinho>
          <a href="/cart">
            <AiOutlineShoppingCart />
            <p>Cesta</p>
            {totalPrice}
          </a>
        </Carrinho>
      </HeaderDown>
    </Container>
  )
}
