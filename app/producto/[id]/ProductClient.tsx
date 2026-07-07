'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Share2, ShoppingCart, ChevronLeft, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { WHATSAPP_NUMBER } from '@/lib/products'
import { useCart } from '@/lib/CartContext'
import { formatPrice } from '@/lib/utils'

interface Product {
  id: number
  name: string
  category: string
  priceRetail: number
  priceWholesale: number
  image: string
  images?: string[]
  sizes: string[]
  description?: string
  material?: string
}

interface ProductClientProps {
  product: Product
}

export function ProductClient({ product }: ProductClientProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '')
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [buyType, setBuyType] = useState<'retail' | 'wholesale'>('retail')
  const [addedToCart, setAddedToCart] = useState(false)

  const currentPrice = buyType === 'retail' ? product.priceRetail : product.priceWholesale
  const totalPrice = currentPrice * quantity
  const discountPct = Math.round(((product.priceRetail - product.priceWholesale) / product.priceRetail) * 100)

  const handleAddToCart = () => {
    if (!selectedSize) return
    addItem({
      id: product.id,
      name: product.name,
      price: currentPrice,
      priceRetail: product.priceRetail,
      priceWholesale: product.priceWholesale,
      image: product.image,
      size: selectedSize,
      buyType,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWhatsApp = () => {
    const text = `Hola! Quiero comprar ${quantity}x ${product.name} - Talle ${selectedSize} (${buyType === 'retail' ? 'Minorista' : 'Mayorista'}) - Total: $${formatPrice(totalPrice)}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/#catalogo" className="flex items-center gap-2 hover:opacity-70 transition text-sm font-medium">
            <ChevronLeft size={20} />
            Volver
          </Link>
          <span className="font-bold text-sm truncate max-w-[200px]">{product.name}</span>
          <Link href="/carrito" className="relative">
            <ShoppingCart size={22} />
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Galeria */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 relative group">
            <Image
              src={product.images?.[imageIndex] || product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
              priority
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {product.category}
            </div>
          </div>

          {product.images && product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setImageIndex(idx)}
                  className={`w-16 h-16 rounded-lg border-2 overflow-hidden transition ${
                    imageIndex === idx ? 'border-red-600' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <Image src={img} alt="" width={64} height={64} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm"
            >
              <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} className={isFavorite ? 'text-red-600' : 'text-gray-400'} />
              Favorito
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm">
              <Share2 size={16} />
              Compartir
            </button>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <div>
            <p className="text-xs text-red-600 font-bold tracking-widest uppercase mb-1">{product.category}</p>
            <h1 className="text-3xl font-black mb-1">{product.name}</h1>
            {product.material && (
              <p className="text-sm text-gray-500 mb-4">{product.material}</p>
            )}
          </div>

          {/* Precios */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex gap-6 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Minorista (1-2)</p>
                <p className="text-2xl font-black">${formatPrice(product.priceRetail)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Mayorista (3+)</p>
                <p className="text-2xl font-black text-red-600">${formatPrice(product.priceWholesale)}</p>
                <p className="text-xs text-green-600 font-bold">{discountPct}% OFF</p>
              </div>
            </div>
            {/* Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setBuyType('retail')}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition ${
                  buyType === 'retail' ? 'bg-black text-white' : 'bg-white text-black border border-gray-200 hover:bg-gray-100'
                }`}
              >
                Minorista
              </button>
              <button
                onClick={() => setBuyType('wholesale')}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition ${
                  buyType === 'wholesale' ? 'bg-red-600 text-white' : 'bg-white text-black border border-gray-200 hover:bg-gray-100'
                }`}
              >
                Mayorista (3+)
              </button>
            </div>
          </div>

          {/* Descripcion */}
          {product.description && (
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          )}

          {/* Talles */}
          <div>
            <p className="text-sm font-bold mb-3">Selecciona tu talle</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 rounded-lg font-bold text-sm transition ${
                    selectedSize === size
                      ? 'bg-black text-white ring-2 ring-red-600 ring-offset-2'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Cantidad */}
          <div>
            <p className="text-sm font-bold mb-3">Cantidad</p>
            <div className="flex items-center gap-0 bg-gray-100 rounded-xl w-fit overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 hover:bg-gray-200 transition"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-bold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 hover:bg-gray-200 transition"
              >
                <Plus size={16} />
              </button>
            </div>
            {quantity >= 3 && buyType === 'retail' && (
              <p className="text-xs text-green-600 font-semibold mt-2">Con 3+ unidades aplica precio mayorista</p>
            )}
          </div>

          {/* Total */}
          <div className="flex items-center justify-between bg-black text-white rounded-xl p-4">
            <span className="text-sm font-medium">Total</span>
            <span className="text-2xl font-black">${formatPrice(totalPrice)}</span>
          </div>

          {/* Botones de accion */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-4 rounded-xl font-bold text-base transition flex items-center justify-center gap-2 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-black text-white hover:bg-gray-800'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <ShoppingCart size={20} />
              {addedToCart ? 'Agregado al carrito' : 'Agregar al carrito'}
            </button>

            <button
              onClick={handleWhatsApp}
              disabled={!selectedSize}
              className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-base hover:bg-green-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Realizar pedido por WhatsApp
            </button>
          </div>

          {/* Info extra */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              Talles S a XXL disponibles
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              Precio mayorista desde 3 unidades
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              Envios segun tu zona
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
