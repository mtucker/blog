import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'

export default function ComingSoon() {
  return (
    <>
      <Layout>
        <Head>
          <title>MattTucker</title>
        </Head>
        <Container>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            MattTucker
          </h1>
          <h1>Coming soon</h1>
        </Container>
      </Layout>
    </>
  )
}