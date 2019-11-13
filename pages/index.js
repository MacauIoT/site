import Link from "next/link";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <h1 className="title">Macau IoT</h1>
                <h2 className="subtitle">
                  Promote and implement IoT (Internet of Things) technology in
                  Macau.
                </h2>
              </div>

              <img src="/hero.jpg" width="700" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <hr className='container' /> */}

      <section className="section">
        <div className="container">
          <div className="example columns">
            <div className="column is-one-third">
              <div className="content">
                <h2>Design an air quality monitoring system for Macau</h2>
                <p>
                  <a href="https://github.com/comus">Chris Leong</a>,{" "}
                  <a href="https://github.com/blsh074">Ben Leong</a>,{" "}
                  <a href="https://github.com/Reo-Lao">Reo Lao</a>
                </p>
                <p>
                  This is a <a href="http://www.ipm.edu.mo/">MPI</a> class
                  assignment project. We want to develop an air quality
                  monitoring system for the following reasons: The air condition
                  in Macau is getting worse and worse in the past decade; There
                  is a lack of large air monitoring system in Macau; We want to
                  find out what is the actual causes of environmental
                  degradation, which we assume is largely related to car
                  emissions; Policy making requires data.
                </p>
                <div>
                  <Link href="/air">
                    <a>Read More →</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="column">
              <img src="/air_feature.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          .hero {
            border-bottom: 2px #f5f5f5 solid;
            display: block;
          }
        `}
      </style>
    </Layout>
  );
};

Home.getInitialProps = () => ({});

export default Home;
