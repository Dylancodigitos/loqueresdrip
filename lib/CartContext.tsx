'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export interface CartItem {
  id: number
  name: string
  price: number
  priceRetail: number
  priceWholesale: number
  image: string
  size: string
  buyType: 'retail' | 'wholesale'
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number, size: string, buyType: 'retail' | 'wholesale') => void
  updateQuantity: (id: number, size: string, buyType: 'retail' | 'wholesale', quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === newItem.id && i.size === newItem.size && i.buyType === newItem.buyType
      )
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id && i.size === newItem.size && i.buyType === newItem.buyType
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((id: number, size: string, buyType: 'retail' | 'wholesale') => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size && i.buyType === buyType)))
  }, [])

  const updateQuantity = useCallback(
    (id: number, size: string, buyType: 'retail' | 'wholesale', quantity: number) => {
      if (quantity <= 0) {
        removeItem(id, size, buyType)
        return
      }
      setItems((prev) =>
        prev.map((i) =>
          i.id === id && i.size === size && i.buyType === buyType ? { ...i, quantity } : i
        )
      )
    },
    [removeItem]
  )

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}
