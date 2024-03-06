export const getStoredContent = () => {
  return (
    localStorage.getItem('nickchubb-ca-v3-content') ??
    '<p>Enter a query to generate a new page!<P>'
  )
}

type ContentType = {
  html: string
  query: string
  theme: string
  style: object
}

export const storeContent = (content: ContentType): void => {
  localStorage.setItem('nickchubb-ca-v3-content', content.html)
  const existing = localStorage.getItem('content-themes')
  const themes = existing ? JSON.parse(existing) : []
  themes.push(content)
  localStorage.setItem('content-themes', JSON.stringify(themes))
}
