import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'
import Link from 'next/link'

// Function to fetch a single product by ID
async function getProduct(id: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('products')
    .select(`
      id,
      name,
      description,
      price,
      image_url,
      category:categories (
        name,
        slug
      )
    `)
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Error fetching product:', error)
    return null
  }
  
  return data
}

// This is a Server Component - no 'use client' directive needed
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    return (
      <div className="min-h-screen bg-background-color flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Product not found</h1>
          <Link 
            href="/shop" 
            className="text-brand-saffron hover:underline font-medium"
          >
            Back to shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/shop" 
          className="inline-flex items-center text-brand-saffron hover:underline mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to shop
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 aspect-square relative">
              {product.image_url ? (
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
            </div>
            
            <div className="md:w-1/2 p-8">
              {product.category && (
                <span className="text-sm font-medium text-brand-saffron uppercase tracking-wide">
                  {product.category.name}
                </span>
              )}
              <h1 className="text-3xl font-bold text-text-primary mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-text-primary mb-6">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-text-secondary mb-8">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex-1 min-w-[200px] bg-brand-saffron text-deep-green py-3 px-6 rounded-md font-medium hover:bg-turmeric-yellow transition-colors duration-200">
                  Add to Cart
                </button>
                <button className="flex-1 min-w-[200px] border-2 border-brand-saffron text-brand-saffron py-3 px-6 rounded-md font-medium hover:bg-brand-saffron hover:text-deep-green transition-colors duration-200">
                  Buy Now
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-text-primary mb-4">Product Details</h2>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="text-text-secondary w-32">Category</span>
                    <span className="text-text-primary">{product.category?.name || 'Not specified'}</span>
                  </li>
                  <li className="flex">
                    <span className="text-text-secondary w-32">Price</span>
                    <span className="text-text-primary">${product.price.toFixed(2)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}