import { useContext } from 'react'

import { Header } from '../components/Header'
import { Modal } from '../components/Modal'
import { Products } from '../components/Products'
import { ModalContext } from '../contexts/ModalContext'

export default function Home() {
  const { isOpen } = useContext(ModalContext)

  return (
    <div>
      {isOpen && <Modal />}
      <Header />
      <Products />
    </div>
  )
}
