import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import {useRouter} from 'next/router'
import { signInWithPopup,onAuthStateChanged } from '@firebase/auth'
// import { signInWithPopup } from 'firebase/auth'
import {auth, provider} from '../new'
import Link from "next/link"


const Login = () => {
    const router = useRouter();
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if (user) {
                router.push('/')
            }
        })
    },[]);
    return (
        <Wrapper>
            <Logo src="https://i.ibb.co/n6LWQM4/Post.png" />
            <Title>Login to access you account. </Title>
            <HeadImg src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SignInButton onClick={()=>{signInWithPopup(auth, provider)}}>Sign In With Google</SignInButton>
            <SocialIcons>
              <Link href="https://github.com/PetersGlory" passHref={true}>
                <Github src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-12.jpg" />
              </Link>
              <Link href="https://web.facebook.com/Leadcodegiants/" passHref={true}>
                <Facebook src="https://icon-library.com/images/facebook-icon-for-resume/facebook-icon-for-resume-8.jpg" />
              </Link>
              <Link href="https://www.linkedin.com/in/codegiants/" passHref={true}>
                <LinkedIn src="https://icon-library.com/images/linkedin-icon-resume/linkedin-icon-resume-1.jpg" />
              </Link>
            </SocialIcons>
        </Wrapper>
    )
}
const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 p-4 w-screen
`
const Logo = tw.img`
h-20 object-contain w-auto self-start mt-4
`
const SignInButton = tw.button`
bg-gray-700 py-4 mt-8 text-white w-full rounded-full self-center
`
const HeadImg = tw.img`
mt-4 p-2
`
const Title = tw.div`
text-2xl pt-4 text-gray-500 font-medium mt-4
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
export default Login
