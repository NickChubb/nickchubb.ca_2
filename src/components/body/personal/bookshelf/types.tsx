export type Book = {
  title: string
  authors: Array<string>
  publishedDate: string
  description: string
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  }
  infoLink: string
}