import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl"
import { useEffect } from 'react'

mapboxgl.accessToken = 
"pk.eyJ1IjoicGV0ZXIyMjAwIiwiYSI6ImNrdm00aHZ2cDByem8ydW81MXZrYjF5ZDgifQ.lroc5sTi5y8D8jKHB2zR1g"
const Map = () => {
    
  useEffect(()=>{
    // if(map.current) return;
    const maps = new mapboxgl.Map({
      container:'maps',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
  }, []);
    return (
        <Wrapper id="maps">
            
        </Wrapper>
    )
}

const Wrapper = tw.div`
flex-1
`

export default Map
