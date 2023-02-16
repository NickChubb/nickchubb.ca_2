// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from '../../../src/utils/admin'

type Data = {
  error: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // validate token and send 200 if valid, 401 if invalid
    const isValid = await validateToken(req.body.token)
    if (isValid) {
      return res.status(200).json({ error: null })
    } else {
      return res.status(401).json({ error: 'token is invalid' })
    }
  }
}