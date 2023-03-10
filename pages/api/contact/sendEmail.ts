// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return null

  const body = JSON.parse(req.body)

  const formData = new FormData()
  formData.append('first_name', body.firstName)
  formData.append('last_name', body.lastName)
  formData.append('email', body.replyTo)
  formData.append('message', body.message)
  formData.append('service_id', process.env.EMAILJS_SERVICE_ID || '')
  formData.append('accessToken', process.env.EMAILJS_PRIVATE_KEY || '')
  formData.append('template_id', process.env.EMAILJS_TEMPLATE_ID || '')
  formData.append('user_id', process.env.EMAILJS_USER_ID || '')

  fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) return res.status(200).json({})
      return res.status(500).json({})
    })
    .catch((err) => {
      console.log(err)
      return res.status(500).json({})
    })
}


