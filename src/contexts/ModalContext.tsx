import { createContext, ReactNode, useState } from 'react'

interface ModalContextData {
  title: string
  type: string
  price: number
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  getInfo: ({ title, type, price }: App.Product) => void
}

interface ModalContextProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState(0)

  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function getInfo({ title, type, price }: App.Product) {
    setTitle(title)
    setType(type)
    setPrice(price)
  }

  return (
    <ModalContext.Provider
      value={{ title, type, price, isOpen, openModal, closeModal, getInfo }}
    >
      {children}
    </ModalContext.Provider>
  )
}
