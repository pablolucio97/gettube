import { AppProps } from 'next/app'
import { Layout } from '../layout'


function App({
    Component,
    pageProps: { ...pageProps }
}: AppProps): JSX.Element {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App