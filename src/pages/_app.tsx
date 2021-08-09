import { ReactElement } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }): ReactElement {
  return <Component {...pageProps} />
}
