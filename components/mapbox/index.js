import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiY29tdXMiLCJhIjoiY2pzeDd4cTlqMHBtcjRhb2QzdzM2czdkYyJ9.1-ViE9zpaFG9dO9-ajNPTg'
})

export default () => {
  return (
    <Map
      style='mapbox://styles/mapbox/light-v10'
      zoom={[12]}
      center={[-122.447303, 37.753574]}
      containerStyle={{
        height: '100%',
        width: '100%'
      }}
    >
      {/* <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer> */}
    </Map>
  )
}
