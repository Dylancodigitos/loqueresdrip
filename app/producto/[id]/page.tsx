import { notFound } from 'next/navigation'
import { PRODUCTS } from '@/lib/products'
import { ProductClient } from './ProductClient'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = PRODUCTS.find((p) => p.id === parseInt(id))

  if (!product) {
    notFound()
  }

  return <ProductClient product={product} />
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: String(product.id),
  }))
}
