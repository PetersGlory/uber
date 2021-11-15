import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
import {useRouter} from "next/router"
import Map from './components/Map'
import RideSelector from './components/RideSelector'

const Confirm = () => {
    
    const router = useRouter();
    const { pickUp, dropOff } = router.query;
    const [pick, setPick] = useState([0,0]);
    const [drop, setDrop] = useState([0,0]);
    const token = "pk.eyJ1IjoicGV0ZXIyMjAwIiwiYSI6ImNrdnVyZ2N3dTU5NzUyd3E1NjY3cm1vdHEifQ.WeNZ7j-9R1SlQiqMl_O-DA";
    const getPickupCordinate = (pickUp) =>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` + 
        new URLSearchParams({
            access_token:token,
            limit:1
        })
        )
        .then(res => res.json())
        .then(data =>{
            setPick(data.features[0].center);
            
        })
    }

    const getDropofCordinate = (dropOff) =>{
        
        // const token = "pk.eyJ1IjoicGV0ZXIyMjAwIiwiYSI6ImNrdm00aHZ2cDByem8ydW81MXZrYjF5ZDgifQ.lroc5sTi5y8D8jKHB2zR1g";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` + 
        new URLSearchParams({
            access_token:token,
            limit:1
        })
        )
        .then(res => res.json())
        .then(data =>{
            setDrop(data.features[0].center);
            
        })
    }

    useEffect(()=>{
        getPickupCordinate(pickUp);
        getDropofCordinate(dropOff);
      
    },[pickUp, dropOff])

    
    return (
        <Wrapper>
            {/* Buttons */}
            <ButtonContainer>
                <Link href="/search" passHref={true}>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            <Map
                pickup={pick}
                dropOff={drop}
            />
            <RidesContainer>
                <RideSelector 
                    pickUp={pick}
                    dropOff={drop}
                />
               
            </RidesContainer>
        </Wrapper>
    )
}

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200
`
const RidesContainer = tw.div`
flex-1 flex flex-col h-1/2
`
const ButtonContainer = tw.div`
fixed bg-white rounded-full top z-10 
top-1 left-1 shadow-lg
`
const BackButton = tw.img`
h-8 cursor-pointer hover:scale-105 transition text-xl
`

export default Confirm
