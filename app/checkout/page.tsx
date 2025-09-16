"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/app/contexts/cart-context"

export default function CheckoutPage() {
  const { state, dispatch } = useCart()
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    phone: "",
  })

  const subtotal = state.total
  const shipping = subtotal > 0 ? 5.99 : 0
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Shipping Details:", formData)
    console.log("Cart Items:", state.items)
    alert("Check the console for the order details!")
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--background-color)]">
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-4xl flex-1">
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 text-center">
            <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">No items to checkout</h1>
            <p className="text-[var(--text-secondary)] mb-6">Your cart is empty. Add some products first!</p>
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

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <nav className="text-sm mb-8">
          <ol className="list-none p-0 inline-flex space-x-2">
            <li className="flex items-center">
              <Link href="/" className="text-gray-500 hover:text-[var(--primary-color)]">
                Home
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/cart" className="text-gray-500 hover:text-[var(--primary-color)]">
                Cart
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-800">Checkout</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-extrabold text-[var(--text-primary)] mb-8 section-heading">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1" htmlFor="firstName">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1" htmlFor="lastName">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1" htmlFor="address">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1" htmlFor="city">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1" htmlFor="state">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1" htmlFor="zipCode">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1" htmlFor="country">
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="India">India</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--primary-color)] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
              >
                Continue to Payment
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-8">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6 section-heading">Order Summary</h2>

            {/* Order Items */}
            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div key={`${item.id}-${item.name}`} className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                      src={item.image || "/placeholder.svg"}
                    />
                    <span className="absolute -top-2 -right-2 bg-[var(--primary-color)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[var(--text-primary)]">{item.name}</p>
                    {item.weight && <p className="text-sm text-[var(--text-secondary)]">{item.weight}</p>}
                  </div>
                  <p className="font-semibold text-[var(--text-primary)]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-3 border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <p className="text-[var(--text-secondary)]">Subtotal ({state.itemCount} items)</p>
                <p className="font-semibold text-[var(--text-primary)]">${subtotal.toFixed(2)}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[var(--text-secondary)]">Shipping</p>
                <p className="font-semibold text-[var(--text-primary)]">${shipping.toFixed(2)}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[var(--text-secondary)]">Tax</p>
                <p className="font-semibold text-[var(--text-primary)]">${tax.toFixed(2)}</p>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <p className="text-xl font-bold text-[var(--text-primary)]">Total</p>
                <p className="text-xl font-bold text-[var(--primary-color)]">${total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
