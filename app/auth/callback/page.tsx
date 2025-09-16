'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const handleAuthStateChange = async () => {
      const { data } = await supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          router.push('/')
          router.refresh()
        }
      })

      // Check for existing session
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push('/')
        router.refresh()
      }

      return () => {
        data.subscription.unsubscribe()
      }
    }

    handleAuthStateChange()
  }, [router, supabase])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-color">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-saffron mx-auto"></div>
        <p className="mt-4 text-text-primary">Processing authentication...</p>
      </div>
    </div>
  )
}