import ProtectedRoute from '@/components/auth/protected-route'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
              <button
                onClick={handleSignOut}
                className="bg-brand-maroon text-white py-2 px-4 rounded-md hover:bg-red-800 transition duration-200"
              >
                Sign Out
              </button>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-text-primary mb-4">Welcome, {user?.email}!</h2>
              <p className="text-text-secondary">
                This is your personal dashboard where you can manage your account and orders.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brand-light-beige p-6 rounded-lg border border-brand-saffron">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Your Orders</h3>
                <p className="text-text-secondary">View your order history and track shipments</p>
              </div>
              
              <div className="bg-brand-light-beige p-6 rounded-lg border border-brand-saffron">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Wishlist</h3>
                <p className="text-text-secondary">Save your favorite products for later</p>
              </div>
              
              <div className="bg-brand-light-beige p-6 rounded-lg border border-brand-saffron">
                <h3 className="text-lg font-semibold text-text-primary mb-2">Account Settings</h3>
                <p className="text-text-secondary">Update your personal information and preferences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}