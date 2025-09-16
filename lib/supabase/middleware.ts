import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export const createClient = (request: Request) => {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.headers.append('Set-Cookie', `${name}=${value}; ${options.path ?? ''}; ${options.domain ?? ''}; ${options.expires ? `expires=${options.expires.toUTCString()}; ` : ''}${options.secure ? 'Secure; ' : ''}${options.httpOnly ? 'HttpOnly; ' : ''}${options.sameSite ? `SameSite=${options.sameSite}; ` : ''}`)
          })
          
          // Set cookies on response
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  return { supabase, response }
}