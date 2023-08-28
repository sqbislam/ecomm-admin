import type { AppProps } from 'next/app'

export default function MainNav({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}