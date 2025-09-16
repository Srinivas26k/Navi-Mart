// Example usage in a Client Component
'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function SupabaseExample() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your_table_name' with your actual table name
        const { data, error } = await supabase
          .from('your_table_name')
          .select('*')

        if (error) throw error

        setData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h2>Supabase Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}