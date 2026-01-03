import { Typography } from '@mui/material'
import React from 'react'
import BackButton from '@components/BackButton'

const DienstDakdekken = () => {
  return (
    <div>
        <BackButton />
      <Typography
            variant="h1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3rem, 10vw, 5rem)",
            }}
          >
            Dakdekken
          </Typography>
    </div>
  )
}

export default DienstDakdekken