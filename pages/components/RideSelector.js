import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { carList } from '../../data/carList'
import Link from "next/link"
import router from 'next/router'

const RideSelector = ({pickUp, dropOff}) => {
    const [rideDuration, setRideDuration] = useState(0);
    const [price, setPrice] = useState(0);
    const tok = "pk.eyJ1IjoicGV0ZXIyMjAwIiwiYSI6ImNrdnVyZ2N3dTU5NzUyd3E1NjY3cm1vdHEifQ.WeNZ7j-9R1SlQiqMl_O-DA";
    
    useEffect(()=>{
       if(rideDuration ==0){
            rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUp[0]},${pickUp[1]};${dropOff[0]},${dropOff[1]}?access_token=${tok}`)
            .then(res => res.json())
            .then(data => {
                setRideDuration(data.routes[0].duration / 100);
            }) 
       }else{
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUp[0]},${pickUp[1]};${dropOff[0]},${dropOff[1]}?access_token=${tok}`)
        .then(res => res.json())
        .then(data => {
            setRideDuration(data.routes[0].duration / 100);
        }) 
       }
    },[pickUp, dropOff]);
    const handleAmount =(e)=>{
        setPrice(e.target.innerText);
        const id = e.target.id;
        document.getElementById(id).style.border = "1px solid red";
        setTimeout(()=>{
            document.getElementById("cBtn").style.backgroundColor="black";
            document.getElementById("cBtn").style.boxShadow="5px 5px 5px #888888";
        },500);
        console.log(price);
    }
    
    const handleChange =()=>{
        if(localStorage.price = JSON.stringify(price)){
            router.push('/payment');
        }
    }

    return (
        <Wrapper>
            <Title>Choose a Ride or swipe up for more....</Title>
            <CarList>
                {carList?.map((car, index)=>(
                    <Car key={index} id={car.id}>
                        <CarImg src={car.imgUrl}/>
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <CarPrice onClick={handleAmount}>$ <p id={car.id}>{(rideDuration * car.multiplier).toFixed(2)}</p></CarPrice>
                    </Car>
                ))}
            </CarList>
            {/* <Link href={{
                    pathname:"/payment",
                    query:{
                        amount:price,
                    }
                }} passHref={true}> */}
                <ConfirmButtonContainer id="cBtn" onClick={handleChange}>
                        Confirm LocberX
                </ConfirmButtonContainer>
            {/* </Link> */}
        </Wrapper>
    )
}

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-center py-2 border-b text-gray-500 text-xs
`
const CarList = tw.div`
overflow-y-scroll overflow-hidden
`
const CarImg = tw.img`
h-14 w-12 rounded-full border border-grey-200 p-px mr-2
`
const Car = tw.div`
flex p-4 items-center
`
const CarDetails = tw.div`
flex-1
`
const CarPrice = tw.button`
text-sm border shadow-lg p-2 btn rounded flex
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-blue-500 text-xs
`

const ConfirmButtonContainer = tw.button`
border-t-2
bg-gray-400 text-white flex flex-col 
items-center m-2 p-2 rounded-full
cursor-pointer hover:bg-gray-400 transition
`

export default RideSelector
