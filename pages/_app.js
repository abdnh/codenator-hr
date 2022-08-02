import '../styles/globals.scss';
import SSRProvider from 'react-bootstrap/SSRProvider';

function App({ Component, pageProps }) {
  return <SSRProvider><Component {...pageProps} /></SSRProvider>
}

export default App
