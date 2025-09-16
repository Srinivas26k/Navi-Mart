"use client"

import Image from "next/image"
import type { CartItem } from "../app/contexts/cart-context"
import { useCart } from "../app/contexts/cart-context"

interface CartItemProps {
  item: CartItem
}

export default function CartItemComponent({ item }: CartItemProps) {
  const { dispatch } = useCart()

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: "REMOVE_ITEM", payload: item.id })
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: newQuantity } })
    }
  }

  const removeItem = () => {
    dispatch({ type: "REMOVE_ITEM", payload: item.id })
  }

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center gap-4">
        <Image
          alt={item.name}
          className="w-20 h-20 object-cover rounded-md"
          src={item.image || "/placeholder.svg"}
          width={80}
          height={80}
        />
        <div className="flex flex-col justify-center">
          <p className="text-lg font-semibold text-[var(--text-primary)]">{item.name}</p>
          {item.weight && <p className="text-sm text-[var(--text-secondary)]">{item.weight}</p>}
          <p className="text-lg font-bold text-[var(--primary-color)] mt-1">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-[var(--text-primary)] border border-gray-300 rounded-md">
          <button
            onClick={() => updateQuantity(item.quantity - 1)}
            className="text-lg font-medium leading-normal flex h-8 w-8 items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            -
          </button>
          <input
            className="text-base font-medium leading-normal w-8 p-0 text-center bg-transparent focus:outline-none border-none"
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(Number.parseInt(e.target.value) || 0)}
            min="0"
          />
          <button
            onClick={() => updateQuantity(item.quantity + 1)}
            className="text-lg font-medium leading-normal flex h-8 w-8 items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            +
          </button>
        </div>

        <button onClick={removeItem} className="text-[var(--text-secondary)] hover:text-red-600 transition-colors">
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  )
}
