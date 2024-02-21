// middleware/rateLimitMiddleware.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PRIVATE_SUPABASE_URL || '',
  process.env.NEXT_PRIVATE_SUPABASE_ANON_KEY || ''
)

const RATE_LIMIT_WINDOW_MS = 60000 // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 3 // Maximum requests per minute

const rateLimitMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { userData } = JSON.parse(req.body)
  const { userId } = userData
  const currentTime = new Date()

  try {

    // Upsert user to DB
    await supabase
      .from('users')
      .upsert({
        id: userData.userId,
        country_name: userData.country_name,
        city: userData.city,
        ip: userData.IPv4,
        state: userData.state,
      })
      .then(({ error }) => error && console.log(error))

    // fetch request count and time
    const { data, error } = await supabase
      .from('users')
      .select('request_count, last_request_time')
      .eq('id', userId)
      .single()

    if (error) {
      return res.status(500).json({
        error: 'Internal Server Error: Could not connect to Database...',
      })
    }

    const lastRequestTime = new Date(data?.last_request_time || 0)
    const elapsedTime = currentTime.getTime() - lastRequestTime.getTime()

    if (elapsedTime < RATE_LIMIT_WINDOW_MS) {
      // Within the rate limit window
      if (data?.request_count >= MAX_REQUESTS_PER_WINDOW) {
        const timeRemaining = RATE_LIMIT_WINDOW_MS - elapsedTime
        return res
          .status(429)
          .json({
            error: `Sorry, rate limit exceeded: please wait ${
              Math.ceil(timeRemaining / 1000)
            } seconds before your next request.`,
          })
      }

      // Update request count for the user
      await supabase
        .from('users')
        .update({
          request_count: data?.request_count + 1
        })
        .eq('id', userId)
    } else {
      // Reset request count for a new rate limit window
      await supabase
        .from('users')
        .update({
          request_count: 1,
          last_request_time: currentTime.toISOString(),
        })
        .eq('id', userId)
    }
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: `Internal Server Error.` })
  }
}

export default rateLimitMiddleware
