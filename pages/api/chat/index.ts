import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PRIVATE_SUPABASE_URL || '',
  process.env.NEXT_PRIVATE_SUPABASE_ANON_KEY || ''
)

const CHATBOT_BASE_URL = 'https://chatbot-jjmgef5kcq-uc.a.run.app/'

/*
  create function append_to_messages(user_id uuid, message text) returns void as $$
    update users
    set messages = array_append(messages, message)
    where user_id = id;
  $$ language sql;
*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return null

  const { message, userData } = JSON.parse(req.body)
  const query = message.toLowerCase().trim()

  if (!userData || !userData.userId)
    return res.status(500).json({ error: 'No user data supplied.' })

  // Upsert user to DB
  supabase
    .from('users')
    .upsert({
      id: userData.userId,
      country_name: userData.country_name,
      city: userData.city,
      IPv4: userData.IPv4,
      state: userData.state,
    })
    .then(({ error }) => error && console.log(error))

  // Update users messages array
  // TODO combine this and the above call to one rpc function
  supabase
    .rpc('append_to_messages', {
      user_id: userData.userId,
      message: query,
    })
    .then(({ error }) => error && console.log(error))

  // Access query cache to see if query has been asked before
  const { data, error } = await supabase
    .from('chatbot')
    .select('response')
    .eq('query', query)

  // Error connecting to Supabase
  if (error) return res.status(500).json({ err: true, msg: error })

  // If query does not exist yet
  if (!data[0]) {
    const CHATBOT_ENDPOINT = CHATBOT_BASE_URL + `?message=${query}`
    try {
      const response = await fetch(CHATBOT_ENDPOINT)
      if (!response.ok) throw new Error
      const text = await response.text()
      if (!text) throw new Error

        // Insert query and response into supabase
        // supabase
        //   .from('chatbot')
        //   .insert({ query: query, response: text })
        //   .then(({ error }) => error && console.log(error))

        return res.status(200).json({ msg: text })
    } catch (err) {
      return res
        .status(500)
        .json({ err: true, msg: 'Error: could not fetch OpenAI data...' })
    }
  }

  return res.status(200).json({ msg: data[0].response })
}
