"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/mock-data"

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("featured")
  const [category, setCategory] = useState("all")
  const [priceRange, setPriceRange] = useState(100)

  const filteredProducts = products.filter((product) => {
    if (category !== "all" && product.category !== category) return false
    if (product.price > priceRange) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      <Header />

      <main className="flex">
        {/* Sidebar Filters */}
        <aside className="w-80 border-r border-[var(--secondary-color)] p-6 hidden lg:block">
          <h3 className="text-[var(--text-primary)] text-xl font-bold mb-6">Filters</h3>

          <div className="space-y-6">
            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-[var(--text-primary)] text-base font-medium" htmlFor="category">
                Category
              </label>
              <select
                className="form-select w-full rounded-lg border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] transition duration-200"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Products</option>
                <option value="masalas">Masalas</option>
                <option value="powders">Powders</option>
                <option value="grains">Grains</option>
                <option value="millets">Millets</option>
                <option value="oils">Oils</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-2">
              <label className="text-[var(--text-primary)] text-base font-medium" htmlFor="price">
                Price Range: $0 - ${priceRange}
              </label>
              <input
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--primary-color)]"
                id="price"
                max="100"
                min="0"
                type="range"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
            </div>

            {/* Dietary Filters */}
            <div className="space-y-2">
              <p className="text-[var(--text-primary)] text-base font-medium">Dietary</p>
              <div className="space-y-1">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                    id="organic"
                    type="checkbox"
                  />
                  <label className="ml-2 text-[var(--text-secondary)]" htmlFor="organic">
                    Organic
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                    id="gluten-free"
                    type="checkbox"
                  />
                  <label className="ml-2 text-[var(--text-secondary)]" htmlFor="gluten-free">
                    Gluten-Free
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                    id="vegan"
                    type="checkbox"
                  />
                  <label className="ml-2 text-[var(--text-secondary)]" htmlFor="vegan">
                    Vegan
                  </label>
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="space-y-2">
              <p className="text-[var(--text-primary)] text-base font-medium">Rating</p>
              <div className="flex items-center gap-1 text-[var(--accent-color)]">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.445a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.365-2.445a1 1 0 00-1.175 0l-3.365 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
                <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.445a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.365-2.445a1 1 0 00-1.175 0l-3.365 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
                <span className="ml-2 text-[var(--text-secondary)] text-sm">& Up</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumb and Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center text-sm mb-2">
                <ol className="inline-flex items-center space-x-1 md:space-x-2">
                  <li className="inline-flex items-center">
                    <a
                      className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <span className="mx-1 text-[var(--text-secondary)]">/</span>
                      <span className="text-[var(--text-primary)]">Shop</span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h2 className="text-[var(--text-primary)] text-4xl font-bold tracking-tight section-heading">
                Our Products
              </h2>
              <p className="text-[var(--text-secondary)] mt-2">Showing {sortedProducts.length} products</p>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-[var(--text-secondary)] text-sm">Sort by:</span>
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === "featured"
                      ? "bg-[var(--primary-color)] text-white"
                      : "bg-[var(--secondary-color)] text-[var(--text-primary)] hover:bg-gray-200"
                  }`}
                  onClick={() => setSortBy("featured")}
                >
                  Featured
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === "price-low"
                      ? "bg-[var(--primary-color)] text-white"
                      : "bg-[var(--secondary-color)] text-[var(--text-primary)] hover:bg-gray-200"
                  }`}
                  onClick={() => setSortBy("price-low")}
                >
                  Price: Low to High
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === "price-high"
                      ? "bg-[var(--primary-color)] text-white"
                      : "bg-[var(--secondary-color)] text-[var(--text-primary)] hover:bg-gray-200"
                  }`}
                  onClick={() => setSortBy("price-high")}
                >
                  Price: High to Low
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--text-secondary)] text-lg">No products found matching your filters.</p>
              <button
                className="mt-4 px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => {
                  setCategory("all")
                  setPriceRange(100)
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
