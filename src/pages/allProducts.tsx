import { Header } from '../components/Header'
import { AllBox, Container } from '../styles/allProducts'

import data from '../../data.json'

import { Product } from '../components/Product'
import { Modal } from '../components/Modal'
import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'

import { AnimatePresence } from 'framer-motion'
import { Footer } from '../components/Footer'

export const allProducts: React.FC = () => {
  const { isOpen } = useContext(ModalContext)

  return (
    <Container>
      <AnimatePresence>{isOpen && <Modal />}</AnimatePresence>
      <Header />
      <AllBox>
        {data.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              type={product.type}
            />
          )
        })}
      </AllBox>
      <Footer />
    </Container>
  )
}

export default allProducts
