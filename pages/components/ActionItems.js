import React from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
import {signOut} from 'firebase/auth'
import { auth } from '../../new'

const ActionItems = ({userName, userPhoto}) => {
    return (
        <ActionItemss>
            {/* Header */}
            <Header>
                <Logo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
                <Profile>
                    <Name>{userName}</Name>
                    <UserImage src={userPhoto} onClick={()=>{signOut(auth)}} />
                </Profile>
            </Header>
            {/* actionbuttons */}
            <ActionButtons>
                <Link href="/search" passHref={true}>
                    <ActionButton><ActionButtonImage src="https://i.ibb.co/Xx4G91m/uberblack.png" />Ride</ActionButton>
                </Link>
                    <ActionButton><ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />Wheel</ActionButton>
                    <ActionButton><ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />Reserve</ActionButton>
            </ActionButtons>
            {/* inputbuttons */}
            <InputButton>
                Where to?
            </InputButton>
        </ActionItemss>
    )
}

const ActionItemss = tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`
const ActionButtons = tw.div`
flex
`
const InputButton = tw.div`
h-18 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg
`
const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 h-28 flex items-center justify-content 
flex-col rounded-lg transform hover:scale-105 transition text-xl
`
const Profile = tw.div`
flex items-center 
`
const Name = tw.div`
mr-4 w-18 text-white font-medium
`
const UserImage = tw.img`
h-12 w-12 rounded-full border border-grey-200 p-px cursor-pointer
`
const Logo = tw.img`
h-16 rounded-full mb-2
`
const ActionButtonImage = tw.img`
h-3/5
`
export default ActionItems

