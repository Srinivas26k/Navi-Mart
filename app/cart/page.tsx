"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartItem from "@/components/cart-item"
import { useCart } from "@/app/contexts/cart-context"

export default function CartPage() {
  const { state } = useCart()

  const subtotal = state.total
  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + shipping

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--background-color)]">
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-4xl flex-1">
          <nav className="text-sm mb-8">
            <ol className="list-none p-0 inline-flex space-x-2">
              <li className="flex items-center">
                <Link href="/" className="text-gray-500 hover:text-[var(--primary-color)]">
                  Home
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-800">Shopping Cart</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] mb-6 section-heading">Shopping Cart</h1>

          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
              <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">Your cart is empty</h2>
              <p className="text-[var(--text-secondary)]">Add some delicious products to get started!</p>
            </div>
            <Link
              href="/shop"
              className="inline-block bg-[var(--primary-color)] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Continue Shopping
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-1">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-grow">
            <nav className="text-sm mb-8">
              <ol className="list-none p-0 inline-flex space-x-2">
                <li className="flex items-center">
                  <Link href="/" className="text-gray-500 hover:text-[var(--primary-color)]">
                    Home
                  </Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-800">Shopping Cart</li>
              </ol>
            </nav>

            <h1 className="text-4xl font-extrabold text-[var(--text-primary)] mb-6 section-heading">Shopping Cart</h1>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
              {state.items.map((item) => (
                <CartItem key={`${item.id}-${item.name}`} item={item} />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-8 lg:mt-0 sticky top-8">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 section-heading">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <p className="text-[var(--text-secondary)]">Subtotal ({state.itemCount} items)</p>
                  <p className="font-semibold text-[var(--text-primary)]">${subtotal.toFixed(2)}</p>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <p className="text-[var(--text-secondary)]">Estimated Shipping</p>
                  <p className="font-semibold text-[var(--text-primary)]">
                    {shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 mt-2">
                  <p className="text-xl font-bold text-[var(--text-primary)]">Total</p>
                  <p className="text-xl font-bold text-[var(--primary-color)]">${total.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/checkout"
                  className="block w-full bg-[var(--primary-color)] text-white py-3 px-5 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 transition-opacity duration-200 text-lg font-bold text-center"
                >
                  Proceed to Checkout
                </Link>
              </div>

              <div className="mt-4 text-center">
                <Link
                  href="/shop"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)] underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
