import {
  default as Document,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

          <meta name="robots" content="all" />
          <meta
            name="keywords"
            content="language, wave, wave lang, insomnia vm, wave vm, wave programming language"
          />
          <meta name="author" content="Yuuki Wesp" />
          <meta name="copyright" content="Yuuki Wesp" />
          <meta name="yandex" content="noyaca" />
          <base href="/" />
          <meta name="Description" content="Wave language" />

          <meta property="og:url" content="https://wave-lang.org/" />
          <meta property="og:site_name" content="Wave Lang" />
          <meta property="og:title" content="Wave Lang" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Wave language" />
          <meta property="og:image" content="/vercel.svg" />
          <meta property="og:image:height" content="283" />
          <meta property="og:image:width" content="64" />

          <meta name="yandex-verification" content="037d3272966f67c1" />

          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
