// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { validateCredentials } from '../../../src/utils/admin'

type Data = {
  token: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const token = await validateCredentials(req.body.username, req.body.password)
    if (token) {
      res.status(200).json({ token: token })
    } else {
      res.status(401).json({ token: null })
    }
  }
}
