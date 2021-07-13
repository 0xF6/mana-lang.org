import { ErrorView } from 'error-view'
import { Layout } from 'layout'
import React from 'react'

export const ErrorPage = () => {
  return (
    <Layout>
      <ErrorView code={'404'} />
    </Layout>
  )
}

export default ErrorPage
