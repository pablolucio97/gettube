import { AppProps } from 'next/app'
import { Layout } from '../layout'
import { GlobalStyle } from '../styles/globalstyles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../themes/theme'

function App({
    Component,
    pageProps: { ...pageProps }
}: AppProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App