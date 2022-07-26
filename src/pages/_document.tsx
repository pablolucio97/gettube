import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {

        const googleFontUrl = 'https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800&display=swap'

        return (
            <Html>
                <Head>
                    {/* @ts-ignore */}
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Download youtube videos free" />
                    <meta name="keywords" content="youtube videos download free platform" />
                    <meta name='author' content='Pablo Silva' />
                    <meta name="theme-color" content="#000" />
                    <link rel="preload" as="font"></link>
                    <link href={googleFontUrl} rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}