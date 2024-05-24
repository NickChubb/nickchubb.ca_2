import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PRIVATE_SUPABASE_URL || '',
  process.env.NEXT_PRIVATE_SUPABASE_ANON_KEY || ''
)

export default async function handler(req, res) {
  // if (
  //   req.headers['Authorization'] !== `Bearer ${process.env.CRON_SECRET}`
  // ) {
  //   return res.status(401).end('Unauthorized')
  // }

  let emailBody = {
    service: 'chatbot',
    message: '',
    status: 'OK',
  }

  try {
    await supabase
      .from('users')
      .upsert({
        id: '572a4a0c-29d0-4e88-a340-cf8be067ccaa',
        country_name: 'cron-test',
        city: 'cron-test',
        ip: undefined,
        state: 'cron-test',
      })
      .then(({ error }) => {
        if (error)
          throw new Error(
            `Could not connect to database. ERROR: ${JSON.stringify(error)}`
          )
      })

    const secret = crypto
      .createHash('sha256')
      .update(process.env.CHATBOT_API_SECRET || '')
      .digest('hex')
    const endpoint =
      process.env.CHATBOT_BASE_URL +
      `?message=This is an automated cron test, return 'success' if successful.&secret=${secret}`

    const response = await fetch(endpoint)
    if (!response.ok) throw new Error('ERROR: Could not connect to OpenAI API.')
    const text = await response.text()
    if (!text) throw new Error('ERROR: Could not connect to OpenAI API.')

    emailBody.message =
      'Successfully connected to OpenAI. Chatbot is operational.'
  } catch (err) {
    emailBody.message = err
    emailBody.status = 'FAILED'
  } finally {
    const formData = new FormData()
    formData.append('service', emailBody.service)
    formData.append('status', emailBody.status)
    formData.append('message', emailBody.message)
    formData.append('service_id', process.env.EMAILJS_SERVICE_ID || '')
    formData.append('accessToken', process.env.EMAILJS_PRIVATE_KEY || '')
    formData.append('template_id', process.env.EMAILJS_TEST_TEMPLATE_ID || '')
    formData.append('user_id', process.env.EMAILJS_USER_ID || '')
    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) return res.status(200).json({})
        return res.status(500).json(JSON.stringify(response))
      })
      .catch((err) => {
        console.log(err)
        return res.status(500).json(JSON.stringify(err))
      })
  }
}
