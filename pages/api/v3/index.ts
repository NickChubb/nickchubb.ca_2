import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'
import rateLimitMiddleware from '../../../src/middleware/rateLimitMiddleware'

// const supabase = createClient(
//   process.env.NEXT_PRIVATE_SUPABASE_URL || '',
//   process.env.NEXT_PRIVATE_SUPABASE_ANON_KEY || ''
// )

const ENTITY_BASE_URL = process.env.ENTITY_BASE_URL || ''
const ENTITY_API_SECRET = process.env.ENTITY_API_SECRET || ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return null

  const { message } = JSON.parse(req.body)
  const query = message.toLowerCase().trim()

  // if (!userData || !userData.userId)
  //   return res.status(500).json({ error: 'No user data supplied.' })

  // Prevent too many requests from being sent to OpenAI
  // await rateLimitMiddleware(req, res)

  // Append message to user
  // supabase
  //   .rpc('append_to_messages', {
  //     user_id: userData.userId,
  //     message: query,
  //   })
  //   .then(({ error }) => error && console.log(error))

  const secret = crypto.createHash('sha256').update(ENTITY_API_SECRET).digest('hex')
  const endpoint =
    ENTITY_BASE_URL + `?message=${query}&secret=${secret}`
  try {
    const response = await fetch(endpoint)
    if (!response.ok) throw new Error()
    const text = await response.text()
    if (!text) throw new Error()

    return res.status(200).json({ message: text })
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error: could not fetch OpenAI data...' })
  }
}
