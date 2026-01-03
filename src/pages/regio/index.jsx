import { Typography } from '@mui/material'
import React from 'react'
import Hero from '../../components/Hero'

export const RegioBennebroek = () => {
  return (
    <div>
      <Hero>
      <Typography
            variant="h1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3rem, 10vw, 5rem)",
            }}
          >
            Regio Bennebroek
          </Typography>
      </Hero>
    </div>
  )
}

export const RegioHaarlem = () => {
  return (
    <div>
      <Hero>
      <Typography
            variant="h1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3rem, 10vw, 5rem)",
            }}
          >
            Regio Haarlem
          </Typography>
      </Hero>
    </div>
  )
}

export const RegioHeemstede = () => {
  return (
    <div>
      <Hero>
      <Typography
            variant="h1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3rem, 10vw, 5rem)",
            }}
          >
            Regio Heemstede
          </Typography>
      </Hero>
    </div>
  )
}

export default RegioBennebroek