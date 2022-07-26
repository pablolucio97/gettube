import { AppProps } from 'next/app'
import { Layout } from '../layout'
import { GlobalStyle } from '../styles/globalstyles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../themes/theme'
import { SessionProvider } from 'next-auth/react'
import { LanguageProvider } from '../contexts/LanguageContext'

function App({
    Component,
    pageProps: { ...pageProps }
}: AppProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <LanguageProvider>
                <SessionProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                    <GlobalStyle />
                </SessionProvider>
            </LanguageProvider>
        </ThemeProvider>
    )
}

export default App