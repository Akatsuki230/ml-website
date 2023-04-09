import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({subsets: ['latin']});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={inter.className}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  )
}

export default MyApp
