import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'

//ATOMS STYLES
import '../styles/atomsStyles.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
