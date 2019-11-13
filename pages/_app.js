function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
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
    </>
  )
}

export default MyApp
