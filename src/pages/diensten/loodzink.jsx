import {Typography } from '@mui/material'
import React from 'react'
import Hero from '../../components/Hero'

const DienstLoodZink = () => {
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
            Lood- & Zinkwerk
          </Typography>
      </Hero>
    </div>
  )
}

export default DienstLoodZink