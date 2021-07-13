import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=1440" />
        <title>Mana Lang</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
