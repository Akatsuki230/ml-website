import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({subsets: ['latin']});

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: [
        `${inter.style.fontFamily}`
      ].join(',')
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187" crossOrigin='anonymous'></script>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
