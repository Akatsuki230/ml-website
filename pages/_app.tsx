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
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
