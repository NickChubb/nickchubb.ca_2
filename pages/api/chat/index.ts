import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  process.env.NEXT_PRIVATE_SUPABASE_URL || '',
  process.env.NEXT_PRIVATE_SUPABASE_ANON_KEY || ''
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return null

  const query = req.body.toLowerCase().trim()
  const { data, error } = await supabase
    .from('chatbot')
    .select('response')
    .eq('query', query)

  // Error connecting to Supabase
  if (error) return res.status(500).json(error)

  // If query does not exist yet
  if (!data[0]) { 
    // query from llamaindex
    // insert query and response into supabase
    // return response
  }

  return res.status(200).json(data[0].response)
}
