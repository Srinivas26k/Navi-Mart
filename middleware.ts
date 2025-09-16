// Example middleware using Supabase client
import { createClient } from '@/lib/supabase/middleware'
import { NextResponse } from 'next/server'

export async function middleware(request: Request) {
  const { supabase, response } = createClient(request)

  // Refresh session before fetching data
  await supabase.auth.getSession()

  // Add your middleware logic here
  // For example, protect routes based on auth status:
  /*
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user && request.url.includes('/protected')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  */

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}