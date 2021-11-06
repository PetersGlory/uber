// import Head from 'next/head'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import ActionItems from './components/ActionItems'

export default function Home() {

  
  return (
    <Wrapper>
        <Map />
        <ActionItems />
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

