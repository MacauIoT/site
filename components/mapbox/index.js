import { useEffect } from 'react'

export default () => {
  let map
  useEffect(() => {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
    mapboxgl.accessToken = 'pk.eyJ1IjoiY29tdXMiLCJhIjoiY2pzeDd4cTlqMHBtcjRhb2QzdzM2czdkYyJ9.1-ViE9zpaFG9dO9-ajNPTg'
    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10'
    })
  }, [])
  return (
    <div id='map' style={{ height: '100%', width: '100%' }} />
  )
}
