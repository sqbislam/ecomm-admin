import type { AppProps } from 'next/app'

export default function PageHeader({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}