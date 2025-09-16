// Example usage in a Server Component
import { createClient } from '@/lib/supabase/server'

export default async function SupabaseServerExample() {
  const supabase = createClient()
  
  // Replace 'your_table_name' with your actual table name
  const { data, error } = await supabase
    .from('your_table_name')
    .select('*')

  if (error) {
    console.error('Error fetching data:', error)
    return <div>Error loading data</div>
  }

  return (
    <div>
      <h2>Supabase Server Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}