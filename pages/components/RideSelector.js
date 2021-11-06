import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { carList } from '../../data/carList'
const RideSelector = () => {

    return (
        <Wrapper>
            <Title>Choose a Ride or swipe up for more....</Title>
            <CarList>
                {carList?.map((car, index)=>(
                    <Car key={index}>
                        <CarImg src={car.imgUrl}/>
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <CarPrice>$24.00</CarPrice>
                    </Car>
                ))}
            </CarList>
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
overflow-y-scroll
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
const CarPrice = tw.div`
text-sm
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-blue-500 text-xs
`

export default RideSelector
