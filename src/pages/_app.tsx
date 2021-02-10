import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Wave Lang</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
