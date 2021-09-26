import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import GlobalStyles from 'components/global-styles'

import Head from 'next/head'
import theme from 'theme'

export default function MyApp(props) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <title>Next App</title>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
