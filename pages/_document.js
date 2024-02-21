import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <meta property="og:title" content="Nick Chubb 👨‍💻" />
        <meta property="og:image" content="/me.png" />
        <meta property="og:url" content="https://nickchubb.ca" />
        <meta property="og:description" content="Hi" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}