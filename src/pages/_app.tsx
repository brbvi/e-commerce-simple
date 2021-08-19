import { ModalContextProvider } from '../contexts/ModalContext'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ModalContextProvider>
  )
}

export default MyApp
