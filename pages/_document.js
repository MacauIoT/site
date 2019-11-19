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
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css'
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/bulma-slider@2.0.0/dist/css/bulma-slider.min.css'
          />
          <script
            defer
            src='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.3.1/js/all.js'
          />
          <link
            href='https://cdn.jsdelivr.net/npm/mapbox-gl@1.4.1/dist/mapbox-gl.css'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
