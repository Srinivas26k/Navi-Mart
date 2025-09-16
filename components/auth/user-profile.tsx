"use client"

import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function UserProfile() {
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = async () => {
    await signOut()
    setIsOpen(false)
  }

  const handleDashboard = () => {
    router.push('/dashboard')
    setIsOpen(false)
  }

  if (!user) return null

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full bg-[var(--secondary-color)] px-3 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--turmeric-yellow)] transition-colors duration-200"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-saffron)] text-white">
          {user.email?.charAt(0).toUpperCase() || 'U'}
        </div>
        <span className="hidden md:inline">
          {user.email?.split('@')[0] || 'User'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-700 border-b">
              <p className="font-medium">{user.email}</p>
            </div>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--secondary-color)]"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[var(--secondary-color)]"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}