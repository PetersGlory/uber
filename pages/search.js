import React,{useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"

const Search = () => {
    const [pick, setPick] = useState("");
    const [drop, setDrop] = useState("");
    return (
        <Wrapper>
            {/* Buttons */}
            <ButtonContainer>
                <Link href="/" passHref={true}>
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
                    <Input placeholder="Enter pickup Location" onChange={(e)=>{setPick(e.target.value)}} value={pick} />
                    <Input placeholder="Where to?" onChange={(e)=>{setDrop(e.target.value)}} value={drop} />
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
                <Link href={{
                    pathname:"/confirm",
                    query:{
                        pickUp: pick,
                        dropOff: drop
                    }
                }} passHref={true}>
                    <ConfirmButton>Confirm Location</ConfirmButton>
                </Link>
            </ConfirmContainer>
            <SocialIcons>
              <Link href="https://github.com/PetersGlory">
                <Github src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg" />
              </Link>
              <Link href="https://web.facebook.com/Leadcodegiants/">
                <Facebook src="https://icon-library.com/images/facebook-icon-for-resume/facebook-icon-for-resume-8.jpg" />
              </Link>
              <Link href="https://www.linkedin.com/in/codegiants/">
                <LinkedIn src="https://icon-library.com/images/linkedin-icon-resume/linkedin-icon-resume-1.jpg" />
              </Link>
            </SocialIcons>
        </Wrapper>
    )
}

const Wrapper = tw.div`
bg-gray-500 h-screen p-2
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
p-4 bg-white flex items-center px-4 mb-2 rounded-b-3xl
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
bg-black text-white h-18 rounded-full p-2 mt-1
`
const ConfirmContainer = tw.div`
px-4 flex flex-col rounded-2 mt-2
`
const SocialIcons = tw.div`
flex p-2 justify-center items-center
`
const Github = tw.img`
h-14 ml-2 cursor-pointer hover:scale-105 transition text-xl
`
const LinkedIn = tw.img`
h-12 cursor-pointer mr-2 hover:scale-105 transition text-xl
`
const Facebook = tw.img`
h-12 cursor-pointer mr-2 hover:scale-105 transition text-xl bg-none
`
export default Search;

