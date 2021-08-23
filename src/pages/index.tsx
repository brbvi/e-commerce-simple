import { useContext } from 'react'

import { Header } from '../components/Header'
import { Modal } from '../components/Modal'
import { Products } from '../components/Products'
import { ModalContext } from '../contexts/ModalContext'

import { AnimatePresence } from 'framer-motion'
import { Footer } from '../components/Footer'

export default function Home() {
  const { isOpen } = useContext(ModalContext)

  return (
    <div>
      <AnimatePresence>{isOpen && <Modal />}</AnimatePresence>
      <Header />
      <Products />
      <Footer />
    </div>
  )
}
