# Authentication Components

This directory contains all the authentication components for the Agro Delight e-commerce store.

## Components

1. **SignUpForm** (`components/auth/signup-form.tsx`) - Handles user registration
2. **LoginForm** (`components/auth/login-form.tsx`) - Handles user login
3. **AuthContext** (`contexts/auth-context.tsx`) - Provides authentication state and methods
4. **ProtectedRoute** (`components/auth/protected-route.tsx`) - Wrapper component for protected pages
5. **Auth Pages** - Pre-built pages for signup, login, and password reset

## Setup

1. Make sure you have set up Supabase and added the environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. The `AuthProvider` is already added to your root layout, so authentication is available throughout your app.

## Usage

### Using the Auth Context

```typescript
'use client'
import { useAuth } from '@/contexts/auth-context'

export default function MyComponent() {
  const { user, signIn, signOut, loading } = useAuth()
  
  if (loading) return <div>Loading...</div>
  
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  )
}
```

### Protecting Routes

```typescript
import ProtectedRoute from '@/components/auth/protected-route'

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Protected Content</h1>
        <p>Only authenticated users can see this</p>
      </div>
    </ProtectedRoute>
  )
}
```

### Available Pages

- `/signup` - User registration page
- `/login` - User login page
- `/auth/callback` - Authentication callback page
- `/auth/reset-password` - Password reset page
- `/dashboard` - Example protected page

## Features

- Email/password authentication
- Password reset functionality
- Session management
- Protected routes
- Responsive design
- Error handling
- Loading states

## Customization

You can customize the styling by modifying the CSS classes in each component. The components use the brand colors defined in your globals.css file:

- `--brand-saffron` - Primary button color
- `--brand-deep-green` - Primary text color
- `--brand-turmeric-yellow` - Hover state for buttons
- `--background-color` - Page background
- `--text-primary` - Primary text color
- `--text-secondary` - Secondary text color