import { Layout } from 'layout'
import { NextPage } from 'next'
import Error from 'next/error'
import React from 'react'

const ErrorPage: NextPage = () => {
  return (
    <Layout>
      <Error statusCode={404} />
    </Layout>
  )
}

export default ErrorPage
