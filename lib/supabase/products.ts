import { createClient } from '@/lib/supabase/server'

export async function getProducts() {
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
    .order('name')
  
  if (error) {
    console.error('Error fetching products:', error)
    return []
  }
  
  return data || []
}

export async function getProductsByCategory(categorySlug: string) {
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
    .eq('category.slug', categorySlug)
    .order('name')
  
  if (error) {
    console.error('Error fetching products by category:', error)
    return []
  }
  
  return data || []
}

export async function getCategories() {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('categories')
    .select('id, name, slug')
    .order('name')
  
  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }
  
  return data || []
}