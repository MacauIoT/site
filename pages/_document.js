import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css' />
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma-slider@2.0.0/dist/css/bulma-slider.min.css' />
          <script defer src='https://use.fontawesome.com/releases/v5.3.1/js/all.js' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          #__next, html, body {
            height: 100%
          }
          #__next {
            display: flex;
            flex-direction: column;
          }
        `}
        </style>
      </Html>
    )
  }
}

export default MyDocument
