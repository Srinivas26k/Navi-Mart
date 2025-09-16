import { getProductsByCategory, getCategories } from '@/lib/supabase/products'
import Link from 'next/link'
import Image from 'next/image'

// This is a Server Component - no 'use client' directive needed
export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const products = await getProductsByCategory(params.slug)
  const categories = await getCategories()
  
  // Find the current category name
  const currentCategory = categories.find(cat => cat.slug === params.slug) || { name: 'Category' }

  return (
    <div className="min-h-screen bg-background-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary font-serif mb-4">
            {currentCategory.name}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore our collection of {currentCategory.name.toLowerCase()} products.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/shop" 
              className="px-4 py-2 bg-white text-text-primary border border-brand-saffron rounded-full font-medium hover:bg-brand-saffron hover:text-deep-green transition-colors duration-200"
            >
              All Products
            </Link>
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={`/shop/category/${category.slug}`}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                  category.slug === params.slug
                    ? 'bg-brand-saffron text-deep-green'
                    : 'bg-white text-text-primary border border-brand-saffron hover:bg-brand-saffron hover:text-deep-green'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link 
                key={product.id} 
                href={`/shop/product/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-brand-light-beige block"
              >
                <div className="aspect-square relative">
                  {product.image_url ? (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                      <span className="text-gray-500">No image</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  {product.category && (
                    <span className="text-xs font-medium text-brand-saffron uppercase tracking-wide">
                      {product.category.name}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-text-primary mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="bg-brand-saffron text-deep-green py-1 px-3 rounded-md text-sm font-medium hover:bg-turmeric-yellow transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-text-primary mb-2">No products found in this category</h3>
            <p className="text-text-secondary">Check back later for new products.</p>
            <Link 
              href="/shop" 
              className="mt-4 inline-block text-brand-saffron hover:underline font-medium"
            >
              Browse all products
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}