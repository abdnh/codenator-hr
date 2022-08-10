import 'antd/dist/antd.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/globals.scss';


import SSRProvider from 'react-bootstrap/SSRProvider';

function App({ Component, pageProps }) {
  return <SSRProvider><Component {...pageProps} /></SSRProvider>
}

export default App
