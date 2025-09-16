# Supabase Clients for Next.js App Router

This directory contains Supabase client configurations for different environments in your Next.js App Router project.

## Setup

1. Install the required dependencies:
```bash
npm install @supabase/ssr @supabase/supabase-js
```

2. Add your Supabase credentials to your `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Client Types

### 1. Browser Client (`client.ts`)
Use this client in Client Components (components with 'use client' directive).

```typescript
'use client'
import { createClient } from '@/lib/supabase/client'

export default function Component() {
  const supabase = createClient()
  // Use supabase client
}
```

### 2. Server Client (`server.ts`)
Use this client in Server Components and Server Actions.

```typescript
import { createClient } from '@/lib/supabase/server'

export default async function Component() {
  const supabase = createClient()
  // Use supabase client
}
```

### 3. Middleware Client (`middleware.ts`)
Use this client in middleware functions.

```typescript
import { createClient } from '@/lib/supabase/middleware'

export function middleware(request: Request) {
  const { supabase, response } = createClient(request)
  // Use supabase client
  return response
}
```

## Usage Examples

Check the example components in the `components` directory for detailed usage patterns.