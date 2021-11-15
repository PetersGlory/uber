import { FlutterWaveButton } from 'flutterwave-react-v3';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { onAuthStateChanged } from '@firebase/auth'
import tw from 'tailwind-styled-components/dist/tailwind';
import {auth} from '../new'
import  Link from 'next/link';

const Payment = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  
  const amounts = JSON.parse(localStorage.getItem("price"));
  useEffect(()=>{
    return onAuthStateChanged(auth, user =>{
        if (user) {
          setUser({
            name: user.displayName,
            img: user.photoURL,
            email: user.email
          });
        }else{
          setUser(null)
            router.push('/login');
        }
        console.log(user);
    })
  },[]);

    const config = {
        public_key: 'FLWPUBK-cb8219002f9bafd217e8e6525a9ec88c-X',
        tx_ref: Date.now(),
        amount: amounts,
        currency: 'USD',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: user && user.email,
          // phonenumber: '07064586146',
          name: user && user.name,
        },
        customizations: {
          title: 'Locber Ride.',
          description: 'Payment For Ride',
          logo: user && user.img,
        },
      };
    
      const fwConfig = {
        ...config,
        text: 'Confirm Ride.',
        callback: (response) => {
           console.log(response);
          closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {
          router.push('/payment');
        },
      };
    return (
        <Wrapper>
          <ButtonContainer>
                <Link href="/search" passHref={true}>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            <Title>Let&apos;s Get Your Ride Ready. </Title>
            <HeadImg src="https://lh3.googleusercontent.com/proxy/1OmOnqdGNr_fFxR5DIEbfj4naAU42C-jCYNhFmJASZEUYq5r8kzSxoIr3yZ2ToYVkS5V_tgHwLcbDd9JlUZYM_dhMVPXvks" />
            <FlutterWaveButton {...fwConfig}
              className="p-2 bg-yellow-300 mt-5 rounded-full shadow-lg text-white font-medium "
              
            />
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
p-2 flex flex-col w-screen h-screen bg-gray-400 
`
const HeadImg = tw.img`
mt-4 p-2 rounded
`
const Title = tw.div`
text-2xl pt-4 text-white font-medium mt-4
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
const ButtonContainer = tw.div`
fixed bg-white rounded-full top z-10 
top-1 left-1 shadow-lg
`
const BackButton = tw.img`
h-8 cursor-pointer hover:scale-105 transition text-xl
`
export default Payment
