import { createContext, ReactNode, useState } from 'react'

interface ModalContextData {
  title: string
  type: string
  price: number
  isOpen: boolean
  totalPrice: number
  handlePurchase: (price: number) => void
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
  const [totalPrice, setTotalPrice] = useState(0)

  const purchasePrice = []

  function handlePurchase(price: number) {
    purchasePrice.push(price)
    purchasePrice.forEach((price) => {
      setTotalPrice(totalPrice + price)
    })
    setIsOpen(false)
  }

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
      value={{
        title,
        type,
        price,
        isOpen,
        openModal,
        closeModal,
        getInfo,
        handlePurchase,
        totalPrice
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
