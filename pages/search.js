import React from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"

const Search = () => {
    return (
        <Wrapper>
            {/* Buttons */}
            <ButtonContainer>
                <Link href="/">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            {/* inputs container  */}
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png"  />
                </FromToIcons>
                <InputBoxes>
                    <Input placeholder="Enter pickup Location" />
                    <Input placeholder="Where to?" />
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </InputContainer>
            {/* save places */}
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Places
            </SavedPlaces>
            {/* location */}
            <ConfirmContainer>
                <Link href="/">
                    <ConfirmButton>Confirm Location</ConfirmButton>
                </Link>
            </ConfirmContainer>
        </Wrapper>
    )
}

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white 
`
const BackButton = tw.img`
h-12 cursor-pointer hover:scale-105 transition text-xl
`
const Circle = tw.img`
h-2.5
`
const Square = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const InputContainer = tw.div`
p-4 bg-white flex items-center px-4 mb-2
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-8 bg-gray-200 my-2 rounded-lg outline-none border-none p-2
`
const FromToIcons = tw.div`
w-10 flex flex-col p-2 mr-2 items-center
`

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3 cursor-pointer hover:scale-105 transition text-xl
`
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`
const ConfirmButton = tw.button`
bg-black text-white h-28
`
const ConfirmContainer = tw.div`
px-4 flex flex-col rounded-2 mt-2
`
export default Search