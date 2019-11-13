import Link from 'next/link'
import dynamic from 'next/dynamic'
import Layout from '../../components/layout'

const Map = dynamic(
  () => import('../../components/mapbox'),
  {
    ssr: false,
    loading: () => (
      <div className='loader-wrapper is-active'>
        <div className='loader is-loading' />
      </div>
    )
  }
)

const Demo = () => {
  return (
    <Layout noFooter>
      <section className='section' style={{ paddingBottom: 0 }}>
        <div className='container'>
          <nav className='breadcrumb' aria-label='breadcrumbs'>
            <ul>
              <li><Link href='/'><a>Home</a></Link></li>
              <li><Link href='/air'><a>Air Quality Monitoring</a></Link></li>
              <li className='is-active'><Link href='/air/demo'><a>Demo</a></Link></li>
            </ul>
          </nav>

          <div className='content-container'>
            <div className='content'>
              <h2 className='title'>Now</h2>
              <input className='slider is-fullwidth is-info' step='1' min='-1000' max='0' value='0' type='range' readOnly />
            </div>
          </div>
        </div>
      </section>
      <div className='map'>
        <Map />
      </div>
      <style jsx>{`
        .content-container {
          margin: 0 auto;
          max-width: 56rem;
        }
        .hero {
          margin-bottom: 2rem;
        }
        .map {
          flex: 1;
        }

        :global(.loader-wrapper) {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: #fff;
          opacity: 0;
          z-index: -1;
          transition: opacity .3s;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
        }
        :global(.loader-wrapper .loader) {
          height: 80px;
          width: 80px;
        }
        :global(.loader-wrapper.is-active) {
          opacity: 1;
          z-index: 1;
        }
      `}
      </style>
    </Layout>
  )
}

Demo.getInitialProps = () => ({})

export default Demo
