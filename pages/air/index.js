import Link from 'next/link'
import Layout from '../../components/layout'

const Air = () => {
  return (
    <Layout>
      <section className='section'>
        <div className='container'>
          <nav className='breadcrumb' aria-label='breadcrumbs'>
            <ul>
              <li><Link href='/'><a>Home</a></Link></li>
              <li className='is-active'><Link href='/air'><a>Air Quality Monitoring</a></Link></li>
            </ul>
          </nav>
          <header>
            <h1 className='title'>Design an air quality monitoring system for Macau</h1>
            <p className='subtitle is-4'>
              <a href='https://github.com/comus'>Chris Leong</a>,{' '}
              <a href='https://github.com/blsh074'>Ben Leong</a>,{' '}
              <a href='https://github.com/Reo-Lao'>Reo Lao</a>
            </p>
          </header>
          <div className='content-container'>
            <article className='message'>
              <div className='message-header'>
                <p>Demonstration</p>
              </div>
              <div className='message-body'>
                <p>We created a proof-of-concept demonstration and API to keep tracking air quality in Macau. Please note that it's not production ready, just for testing.</p>
                <p className='demo'><Link href='/air/demo'><a className='button is-link'>Go to Demo</a></Link></p>
              </div>
            </article>

            <div className='content'>
              <h3>We want to develop an air quality monitoring system for the following reasons:</h3>
              <ul>
                <li>The air condition in Macau is getting worse and worse in the past decade.</li>
                <li>There is a lack of large air monitoring system in Macau.</li>
                <li>We want to find out what is the actual causes of environmental degradation, which we assume is largely related to car emissions.</li>
                <li>Policy making requires data. With the collected data, the Macau government should have a better knowledge about the air quality and be able to offer a solution for the issue.</li>
              </ul>
              <p>To get the results, we need to set up hardware at different locations in Macau. We also consider to put the hardware on buses in order to reduce the total number of hardware required to have a good result.</p>

              <hr className='container' />

              <figure>
                <img src='/air_feature.png' />
                <figcaption>Use limited hardware to know the air quality in most parts of Macau, and we can track it in real time.</figcaption>
              </figure>

              <h3>Components of the system:</h3>
              <ol>
                <li>Raspberry Pi / Arduino MKR1000 (wifi module is embedded)</li>
                <li>
                  Air quality sensor: SDS011 Air Quality Sensor
                  <p>
                  The SDS011 using principle of laser scattering, light scattering can be induced when particles go through the detecting area. The scattered light is transformed into electrical signals and these signals will be amplified and processed. The number and diameter of particles can be obtained by analysis because the signal waveform has certain relations with the particles diameter.
                  </p>
                </li>
                <li>
                  GPS module: 52PI USB-Port-GPS Module
                  <p>The 52PI USB-Port-GPS module uses the L80-39 module solution and supports various raspberry Pi model. It contains CP2102USB serial chip and has the advantages of ultra-low power consumption and fast positioning. Its performance in capturing and tracking is keen and easy to use.</p>
                </li>
              </ol>

              <p>
                The aim of this project is to develop an air detecting system which can collect accurate readings on air quality on the roadside and be used to analyze the relationship between traffic jams and air pollution. The data should provide the Macau government sufficient information to get a better design for bus routes and solve the traffic problem in Macau.
              </p>

              <h3>By putting the hardware on the bus,</h3>
              <ul>
                <li>the air quality on the side of the road can be detected</li>
                <li>it is possible to detect the air quality on the roadside in every ten seconds and collect the data of the air quality in different parts of Macau.</li>
                <li>the bus can generate the power that the device is needed.</li>
                <li>the bus can provide the wifi to the device.</li>
              </ul>

              <figure>
                <img src='/air_devices.jpg' />
                <figcaption>Integrate all the components to the bus side view mirror.</figcaption>
              </figure>

              <h3>Data we could be collected:</h3>
              <ul>
                <li>the real time position of the bus</li>
                <li>air quality of the street from the bus real-time location</li>
                <li>condition of the road using the speed of the bus</li>
                <li>relationship between air quality and congestion</li>
              </ul>

              <h3>Finally, we expect this information can help policy makers to develop policies to solve real-world problems.</h3>
              <ul>
                <li>assign buses based on the air quality of the road</li>
                <li>efficiently control the traffic</li>
              </ul>

              <h3>References</h3>
              <ul>
                <li>
                  Raspberry Pi PM2.5/10 Air Quality Monitor
                  <p>
                    <a href='https://dev.to/jeikabu/raspberry-pi-pm2510-air-quality-monitor-2ede'>https://dev.to/jeikabu/raspberry-pi-pm2510-air-quality-monitor-2ede</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        hr {
          background-color: #f5f5f5;
          border: none;
          display: block;
          height: 2px;
          margin: 1.5rem 0;
        }
        header {
          margin-bottom: 3rem;
        }
        .content-container {
          margin: 0 auto;
          max-width: 56rem;
        }
        .hero {
          margin-bottom: 2rem;
        }
        .demo {
          margin-top: 1rem;
        }
      `}
      </style>
    </Layout>
  )
}

Air.getInitialProps = () => ({})

export default Air
