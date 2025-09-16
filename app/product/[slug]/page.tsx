"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getProductBySlug } from "@/lib/mock-data"
import { useCart } from "@/app/contexts/cart-context"
import Image from "next/image"

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  const { dispatch } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: { ...product, quantity } })
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background-color)]">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-[var(--secondary-color)]">
                <Image
                  alt={product.name}
                  className="w-full h-full object-cover"
                  src={product.images?.[activeImageIndex] || "/placeholder.svg"}
                  width={600}
                  height={600}
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images?.map((image, index) => (
                  <button
                    key={index}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      activeImageIndex === index ? "border-[var(--primary-color)]" : "border-transparent"
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <Image
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      src={image}
                      width={150}
                      height={150}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold text-[var(--text-primary)] font-serif">{product.name}</h1>
                <p className="text-2xl font-semibold text-[var(--primary-color)] mt-2">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{product.description}</p>

              <div className="grid grid-cols-2 gap-4 text-base">
                <div className="flex flex-col">
                  <span className="font-semibold text-[var(--text-primary)]">Weight:</span>
                  <span className="text-[var(--text-secondary)]">{product.weight}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[var(--text-primary)]">Origin:</span>
                  <span className="text-[var(--text-secondary)]">{product.origin}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[var(--text-primary)]">Category:</span>
                  <span className="text-[var(--text-secondary)] capitalize">{product.category}</span>
                </div>
              </div>

              {/* Quantity Selector and Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    className="px-4 py-2 text-xl font-semibold text-[var(--text-primary)]"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-xl font-semibold">{quantity}</span>
                  <button
                    className="px-4 py-2 text-xl font-semibold text-[var(--text-primary)]"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[var(--primary-color)] text-white py-3 px-8 rounded-lg text-lg font-bold hover:bg-[var(--turmeric-yellow)] transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}