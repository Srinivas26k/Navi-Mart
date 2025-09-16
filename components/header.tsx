"use client"

import Link from "next/link"
import { useCart } from "../app/contexts/cart-context"

export default function Header() {
  const { state } = useCart()

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--brand-turmeric-yellow)] px-4 sm:px-6 lg:px-8 py-4 shadow-sm bg-white">
      <div className="flex items-center gap-4">
        <div className="size-8 text-[var(--primary-color)]">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <Link href="/">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[var(--text-primary)] font-serif">
            Agro Delight
          </h2>
        </Link>
      </div>

      <nav className="hidden md:flex flex-1 justify-center gap-8">
        <Link
          className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors duration-200"
          href="/shop"
        >
          Shop
        </Link>
        <Link
          className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors duration-200"
          href="/about"
        >
          About Us
        </Link>
        <Link
          className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors duration-200"
          href="/shop"
        >
          Our Products
        </Link>
      </nav>

      <div className="flex items-center gap-2">
        <button className="flex min-w-[90px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-transparent border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white text-sm font-bold leading-normal tracking-wide transition-colors duration-200 ease-in-out">
          <span className="truncate">Login</span>
        </button>

        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[var(--secondary-color)] text-[var(--text-primary)] hover:bg-[var(--turmeric-yellow)] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors duration-200">
          <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </button>

        <Link
          href="/cart"
          className="relative flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[var(--secondary-color)] text-[var(--text-primary)] hover:bg-[var(--turmeric-yellow)] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors duration-200"
        >
          <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
            <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
          </svg>
          {state.itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand-maroon)] text-xs font-bold text-white">
              {state.itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
