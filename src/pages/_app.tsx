import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/style.scss'

function App({ Component, pageProps }) {
  return  <>
            <Component {...pageProps} />
          </>
}

export default App
