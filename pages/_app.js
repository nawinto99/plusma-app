import '../styles/globals.css'
import Head from 'next/head'

import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Plusma</title>
        <meta name="Description" content="The platform connects donors and seekers." />
        <meta name="author" content="Naveen Thurimerla" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Plusma, NextJS, React, Naveen Thurimerla, TailwindCSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
