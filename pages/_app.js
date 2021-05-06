import '../styles/globals.css'
import Head from 'next/head'

import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Plusma</title>
        <meta name="Description" content="The platform connects donors and seekers." />
        <meta charSet="utf-8"></meta>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YG2HZGLRBD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YG2HZGLRBD');
        `,
          }}
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
