import { ReactElement } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const GATAGID = process.env.GATAGID;

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>yskszk63</title>
        <meta name="description" content="yskszk63" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>○</text></svg>" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} contentEditable={true} suppressContentEditableWarning={true}>yskszk63</h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/yskszk63" target="_blank" rel="noopener noreferrer">
          <i className="devicon-github-original"></i>
          GitHub yskszk63
        </a>
        <a href="https://zenn.dev/yskszk63" target="_blank" rel="noopener noreferrer">
          Zenn yskszk63
        </a>
        <a href="https://twitter.com/yskszk63" target="_blank" rel="noopener noreferrer">
          <i className="devicon-twitter-original"></i>
          Twitter @yskszk63
        </a>
      </footer>

      { GATAGID !== '' && (<>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GATAGID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GATAGID}', {
              page_path: window.location.pathname,
            });`,
          }}
        />
      </>)
      }
    </div>
  )
}
