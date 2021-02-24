import { Banner } from 'banner'
import { FeaturesList } from 'features-list'
import { Layout } from 'layout'
import { NextPage } from 'next'
import React from 'react'

type Props = {
  version: string
}

const Home: NextPage<Props> = ({ version }) => {
  return (
    <Layout>
      <Banner version={version} />
      <FeaturesList />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const response1 = await Promise.resolve({
    version: '0.228.1488',
  })

  return {
    version: response1.version,
  }
}

export default Home
