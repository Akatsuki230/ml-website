import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { CSSProperties } from 'react';
import Sidebar from '@/components/Sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({subsets: ['latin']});

const main: CSSProperties = {
  marginLeft: '180px',
  width: 'calc(100% - 160px)'
}

const sidebar: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  width: '180px',
  backgroundColor: '#222',
  overflowX: 'hidden',
  paddingTop: '20px',
  zIndex: 1,
  color: 'white'
}

function MLWebsite({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className={inter.className}>
        <div style={sidebar}>
          <Sidebar />
        </div>
        <div style={main} className='bg-black text-white min-h-screen top-0 absolute'>
          <Component {...pageProps} />
        </div>
        <Analytics />
      </div>
    </>
  )
}

export default MLWebsite
