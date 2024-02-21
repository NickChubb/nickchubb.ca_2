import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import ChatbotProvider from '../src/components/shared/ChatBot/ChatbotProvider'

export default function App({ Component, pageProps }: AppProps) {
  return typeof window === 'undefined' ? null : (
    <>
      <ChatbotProvider>
        <Component {...pageProps} />
      </ChatbotProvider>
      <Analytics />
    </>
  )
}
