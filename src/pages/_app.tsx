import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { CSSProperties } from 'react';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import styles from './_app.module.css';

const inter = Inter({subsets: ['latin']});

const navbar: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: 'calc(100vw - 15px)',
  height: '40px'
}

function MLWebsite({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className={inter.className}>
        <div className={`bg-[#111] text-white min-h-screen min-w-full top-0 absolute`}>
          <div className={styles.initanim}>
            <br />
            <br />
            <Component {...pageProps} />
          </div>
        </div>
        <div style={navbar}>
          <Navbar />
        </div>
        <Analytics />
      </div>
    </>
  )
}

export default MLWebsite
