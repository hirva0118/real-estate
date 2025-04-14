import { Box } from '@mui/material'
import React from 'react'
import Form from '../sections/Properties/Form'
import Discover from '../sections/Properties/Discover'
import HeroSection from '../sections/Properties/HeroSection'

const Properties = () => {
  return (
    <Box>
      <HeroSection/>
      <Discover />
      <Form/>
    </Box>
  )
}

export default Properties
