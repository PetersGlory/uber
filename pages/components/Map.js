import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl"
import { useEffect } from 'react'

mapboxgl.accessToken = 
"pk.eyJ1IjoicGV0ZXIyMjAwIiwiYSI6ImNrdnVyZ2N3dTU5NzUyd3E1NjY3cm1vdHEifQ.WeNZ7j-9R1SlQiqMl_O-DA"
const Map = (props) => {
    // console.log(props)
  useEffect(()=>{
    // if(map.current) return;
    const maps = new mapboxgl.Map({
      container:'maps',
      style: 'mapbox://styles/peter2200/cl4qteojx000n14p7j68lracw',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
    
    if(props.pickup){

      const marker = new mapboxgl.Marker()
      .setLngLat(props.pickup)
      .addTo(maps);
    
    }
    if (props.dropOff) {
      const marker = new mapboxgl.Marker()
      .setLngLat(props.dropOff)
      .addTo(maps);
    }
    if(props.pickup && props.dropOff){
      maps.fitBounds([
        props.pickup,
        props.dropOff
      ],{
        padding:60
      })
    }
  }, [props.pickup,props.dropOff]);
  
    return (
        <Wrapper id="maps">
            
        </Wrapper>
    )
}

const Wrapper = tw.div`
flex-1 h-1/2
`

export default Map
