// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { map, path, pick, pipe } from 'ramda'
import { Book } from '../../../src/components/body/personal/bookshelf/types'

const BOOKS_PER_PAGE = 8

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

  const page = parseInt((req.query.page ?? 0) as string)

  fetch(
    `https://www.googleapis.com/books/v1/users/${
      process.env.GOOGLE_BOOKS_USERID
    }/bookshelves/0/volumes?key=${process.env.GOOGLE_API_KEY}&startIndex=${
      page * BOOKS_PER_PAGE
    }&maxResults=${BOOKS_PER_PAGE}`
  )
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          const bookList = map(
            pipe(path(['volumeInfo']) as () => Book, pick(bookInfo)),
            data.items
          )
          const maxPage = data.totalItems <= (page + 1) * BOOKS_PER_PAGE
          return res.status(200).json({ books: bookList, maxPage: maxPage })
        })
      } else {
        console.log(response)
        return res.status(500).json({})
      }
    })
    .catch((err) => {
      console.log(err)
      return res.status(500).json({})
    })
}
