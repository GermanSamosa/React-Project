import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Body from '../components/background'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Component {...pageProps} />
  )
}
