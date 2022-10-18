import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'src/utils/firebase/frontend'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
