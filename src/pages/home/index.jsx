import React from 'react'
import Seo from '@components/Seo'
import Hero from './sections/Hero'
import OverMij from './sections/OverMij'
import Reviews from './sections/Reviews'
import Diensten from './sections/Diensten'
import FAQ from './sections/faq'

const Home = () => {
  return (
    <>
      <Seo
        title="Loodgietersbedrijf Juffermans | Lood, zink & dakwerk in Haarlem e.o."
        description="Loodgietersbedrijf Juffermans — vakwerk in lood, zink en dakbedekking in Haarlem, Heemstede en omgeving. Eén aanspreekpunt, gratis offerte."
        path="/"
      />
      <Hero />
      <OverMij />
      <Reviews />
      <Diensten />
      <FAQ />
    </>
  )
}

export default Home
