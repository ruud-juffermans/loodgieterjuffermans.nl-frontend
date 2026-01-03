import React from 'react'
import Hero from './sections/Hero'
import OverMij from './sections/OverMij'
import Reviews from './sections/Reviews'
import Diensten from './sections/Diensten'
import FAQ from './sections/faq'
import { Divider } from '@mui/material'
// import Contact from './sections/Contact'

const Home = () => {
  return (
    <div >
        <Hero id={"home"} />
        <Divider />
        <OverMij id={"over-mij"} />
        <Divider />
        <Reviews id={"reviews"} />
        <Divider />
        <Diensten id={"diensten"} />
        <Divider />
        <FAQ id={"faq"} />
    </ div>
  )
}

export default Home