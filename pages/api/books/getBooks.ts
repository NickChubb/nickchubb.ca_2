// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { map, path, pick, pipe } from 'ramda'
import { Book } from '../../../src/components/body/personal/bookshelf/types'

const bookInfo = [
  'title',
  'authors',
  'publishedDate',
  'description',
  'imageLinks',
  'infoLink',
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return null

  fetch(
    `https://www.googleapis.com/books/v1/users/${process.env.GOOGLE_BOOKS_USERID}/bookshelves/0/volumes?key=${process.env.GOOGLE_API_KEY}`
  )
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          const bookList = map(
            pipe(path(['volumeInfo']) as () => Book, pick(bookInfo)),
            data.items
          )
          console.log(bookList)
          return res.status(200).json(bookList)
        })
      } else {
        return res.status(500).json({})
      }
    })
    .catch((err) => {
      console.log(err)
      return res.status(500).json({})
    })
}
