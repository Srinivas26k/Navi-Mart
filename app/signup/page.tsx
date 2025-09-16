import SignUpForm from '@/components/auth/signup-form'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-color py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-extrabold text-text-primary font-serif">
            Agro Delight
          </h1>
          <h2 className="mt-6 text-center text-2xl font-bold text-text-primary">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-text-secondary">
            Join us to discover natural and organic agro products
          </p>
        </div>
        <SignUpForm />
        <div className="text-center">
          <Link href="/" className="text-brand-saffron hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}