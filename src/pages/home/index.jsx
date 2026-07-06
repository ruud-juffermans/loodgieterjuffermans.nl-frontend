import React from 'react'
import Hero from './sections/Hero'
import OverMij from './sections/OverMij'
import Reviews from './sections/Reviews'
import Diensten from './sections/Diensten'
import FAQ from './sections/faq'

const Home = () => {
  return (
    <>
      <Hero id="home" />
      <OverMij id="over-mij" />
      <Reviews id="reviews" />
      <Diensten id="diensten" />
      <FAQ id="faq" />
    </>
  )
}

export default Home
