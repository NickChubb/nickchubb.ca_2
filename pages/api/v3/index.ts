import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'
import rateLimitMiddleware from '../../../src/middleware/rateLimitMiddleware'

// const supabase = createClient(
//   process.env.NEXT_PRIVATE_SUPABASE_URL || '',
//   process.env.NEXT_PRIVATE_SUPABASE_ANON_KEY || ''
// )

const CHATBOT_BASE_URL = process.env.CHATBOT_BASE_URL || ''
const CHATBOT_API_SECRET = process.env.CHATBOT_API_SECRET || ''

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

  const query_wrapper = [
    'You are to return a valid block of HTML code which builds the body component.',
    'You are not to include head or HTML tags, only content in the body tag.',
    'The body component is for the personal portfolio site of Nick Chubb, a software engineer.',
    'Use data from the provided context to fill information about the topic in the HTML.',
    'Include style tags and centering divs to make the body look nice.',
    'Make sure the colors of the text and the background do not overlap significantly.',
    'Here is the topic and specifications for the body component you should generate: ',
  ]
  const secret = crypto
    .createHash('sha256')
    .update(CHATBOT_API_SECRET)
    .digest('hex')
  const endpoint =
    CHATBOT_BASE_URL +
    `/generator?query=${query_wrapper.join(' ') + query}&secret=${secret}`
  try {
    const response = await fetch(endpoint)
    if (!response.ok) throw new Error()
    const text = await response.text()
    if (!text) throw new Error()

    return res.status(200).json({ content: text })
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error: could not fetch OpenAI data...' })
  }
}
