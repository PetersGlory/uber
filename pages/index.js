import { useEffect, useState } from "react"
import tw from "tailwind-styled-components"
import Map from './components/Map'
import ActionItems from './components/ActionItems'
import {useRouter} from 'next/router'
import { onAuthStateChanged } from '@firebase/auth'
import {auth} from '../new'

export default function Home() {
  const [user, setUser] = useState();
  const router = useRouter();
    useEffect(()=>{
        return onAuthStateChanged(auth, user =>{
            if (user) {
              setUser({
                name: user.displayName,
                img: user.photoURL,
                email: user.email,
                number: user.uid,
              });
            }else{
              setUser(null)
                router.push('/login');
            }
            console.log(user);
        })
    },[]);
  
  return (
    <Wrapper>
        <Map />

        <ActionItems 
        userName={user && user.name}
        userPhoto={user && user.img}
         />
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen bg-gray-400
`

