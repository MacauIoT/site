import { useState } from 'react'
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl'
import moment from 'moment-timezone'
// import geojson from "../../lib/geo";

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiY29tdXMiLCJhIjoiY2pzeDd4cTlqMHBtcjRhb2QzdzM2czdkYyJ9.1-ViE9zpaFG9dO9-ajNPTg',
  // maxZoom: 14,
  minZoom: 11.8
})

export default ({ geojson, value }) => {
  // console.log(geojson);
  const [state] = useState({
    zoom: [11.97],
    maxBounds: [
      [113.32931228327197, 22.025083738662303], // Southwest coordinates
      [113.81605425662934, 22.306704787549364] // Northeast coordinates
    ],
    center: [113.566, 22.162]
  })
  return (
    <>
      <Map
        style="mapbox://styles/mapbox/light-v10" // eslint-disable-line
        zoom={state.zoom}
        maxBounds={state.maxBounds}
        center={state.center}
        containerStyle={{
          height: '100%',
          width: '100%'
        }}
      >
        <GeoJSONLayer
          data={geojson}
          circleLayout={{
            visibility: 'visible'
          }}
          circlePaint={{
            'circle-radius': [
              'interpolate',
              ['linear'],
              ['number', ['get', 'pm2.5']],
              0,
              4,
              12,
              4,
              50,
              24,
              500,
              50
            ],
            'circle-color': [
              'interpolate',
              ['linear'],
              ['number', ['get', 'pm2.5']],
              0,
              '#2DC4B2',
              12,
              '#2DC4B2',

              12.1,
              '#3BB3C3',
              35.4,
              '#3BB3C3',

              35.5,
              '#669EC4',
              55.4,
              '#669EC4',

              55.5,
              '#8B88B6',
              150.4,
              '#8B88B6',

              150.5,
              '#A2719B',
              250.4,
              '#A2719B',

              250.5,
              '#AA5E79',
              500.4,
              '#AA5E79'
            ],
            'circle-opacity': [
              'interpolate',
              ['linear'],
              ['number', ['get', 'createdAt']],
              moment()
                .tz('Asia/Macau')
                .subtract(3, 'hours')
                .subtract(-value, 'minutes')
                .valueOf(),
              0,
              moment()
                .tz('Asia/Macau')
                .subtract(1, 'hours')
                .subtract(-value, 'minutes')
                .valueOf(),
              0.5,
              moment()
                .tz('Asia/Macau')
                .subtract(-value, 'minutes')
                .valueOf(),
              0.8,
              moment()
                .tz('Asia/Macau')
                .add(1, 'hours')
                .subtract(-value, 'minutes')
                .valueOf(),
              0.5,
              moment()
                .tz('Asia/Macau')
                .add(3, 'hours')
                .subtract(-value, 'minutes')
                .valueOf(),
              0
            ]
          }}
        />
        {/* <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer> */}
      </Map>
      <div id='console'>
        <h3 className='is-size-5'>Air Quality</h3>
        <p>Real-time air pollution monitoring with sensors on city bus</p>
        <div className='session'>
          <h4>PM 2.5 levels</h4>
          <div className='row colors' />
          <div className='row labels'>
            <div className='l'>0</div>
            <div className='l'>1</div>
            <div className='l'>2</div>
            <div className='l'>3</div>
            <div className='l'>4</div>
            <div className='l'>5+</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #console {
          position: absolute;
          width: 242px;
          margin: 10px;
          padding: 10px 20px;
          background-color: white;
          top: 0;
          box-sizing: content-box;
          pointer-events: none;
        }

        @media only screen and (max-width: 920px) {
          #console {
            display: none;
          }
        }

        .session {
          margin-bottom: 20px;
        }

        .row {
          height: 12px;
          width: 100%;
        }

        .colors {
          background: linear-gradient(
            to right,
            #2dc4b2,
            #3bb3c3,
            #669ec4,
            #8b88b6,
            #a2719b,
            #aa5e79
          );
          margin-bottom: 5px;
        }

        .labels {
          display: flex;
          justify-content: space-between;
        }

        .l {
          display: inline-block;
          text-align: center;
        }
      `}
      </style>
    </>
  )
}
