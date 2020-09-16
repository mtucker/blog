import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";

export default function ComingSoon() {
  return (
    <>
      <Layout>
        <Head>
          <title>MattTucker</title>
        </Head>
        <Container>
          <h1>MattTucker</h1>
          <h1>Coming soon</h1>
        </Container>
      </Layout>
    </>
  );
}
