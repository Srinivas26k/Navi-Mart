"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import type { Product } from "../app/contexts/cart-context"
import { useCart } from "../app/contexts/cart-context"

interface ProductCardProps {
  product: Product
  showAddToCart?: boolean
}

export default function ProductCard({ product, showAddToCart = true }: ProductCardProps) {
  const { dispatch } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  return (
    <div className="group relative flex flex-col">
      <Link href={`/product/${product.slug}`}>
        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden mb-4">
          <Image
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={product.image || "/placeholder.svg"}
            width={300}
            height={300}
          />
        </div>
        <h4 className="text-[var(--text-primary)] text-lg font-medium">{product.name}</h4>
      </Link>
      <p className="text-[var(--text-secondary)] text-base">${product.price.toFixed(2)}</p>
      {showAddToCart && (
        <button
          onClick={handleAddToCart}
          className="btn-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Add to Cart
        </button>
      )}
    </div>
  )
}
