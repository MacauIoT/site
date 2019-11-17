import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { firebase } from "../../lib/firebase";
import Layout from "../../components/layout";

const Map = dynamic(() => import("../../components/mapbox"), {
  ssr: false,
  loading: () => (
    <div className="loader-wrapper is-active">
      <div className="loader is-loading" />
    </div>
  )
});

const Demo = () => {
  const [value, setValue] = useState(0);
  const [geojson, setGeojson] = useState({
    type: "FeatureCollection",
    features: []
  });
  useEffect(() => {
    var ref = firebase.database().ref("/");
    ref.on("value", snapshot => {
      const recordObject = snapshot.val();
      if (recordObject) {
        const obj = {
          type: "FeatureCollection",
          features: []
        };
        Object.keys(recordObject).forEach(key => {
          obj.features.push({
            type: "Feature",
            properties: {
              createdAt: recordObject[key].createdAt,
              "pm2.5": recordObject[key].pm2p5,
              pm10: recordObject[key].pm10
            },
            geometry: {
              type: "Point",
              coordinates: [recordObject[key].long, recordObject[key].lat]
            }
          });
        });
        setGeojson(obj);
      } else {
        setGeojson({
          type: "FeatureCollection",
          features: []
        });
      }
    });

    return () => ref.off();
  }, []);

  // console.log(new Date(), geojson);

  return (
    <Layout noFooter>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/air">
                  <a>Air Quality Monitoring</a>
                </Link>
              </li>
              <li className="is-active">
                <Link href="/air/demo">
                  <a>Demo</a>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="content-container">
            <div className="content">
              <h2 className="title">
                {value === 0 ? "Now" : `${-value} minute(s) ago`}
              </h2>
              <input
                className="slider is-fullwidth is-info"
                step={1}
                min={-4320}
                max={0}
                value={value}
                type="range"
                onChange={e => {
                  setValue(parseInt(e.target.value, 10));
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <Map geojson={geojson} value={value} />
      </div>
      <style jsx>
        {`
          .content-container {
            margin: 0 auto;
            max-width: 56rem;
          }
          .hero {
            margin-bottom: 2rem;
          }
          .map {
            flex: 1;
            position: relative;
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
            transition: opacity 0.3s;
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
  );
};

Demo.getInitialProps = () => ({});

export default Demo;
