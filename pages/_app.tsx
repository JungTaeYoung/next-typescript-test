import '../styles/globals.css'
import Layout from '../components/Layout'
import { globalStyles } from '../styles/global_styled'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    {globalStyles}

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
