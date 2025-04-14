import { Box } from '@mui/material'
import React from 'react'
import HeroSection from '../sections/About/HeroSection'
import Values from '../sections/About/Values'
import Achievements from '../sections/About/Achievements'
import Experience from '../sections/About/Experience'
import Team from '../sections/About/tEAM.JSX'
import Client from '../sections/About/Client'

const About = () => {
  return (
    <Box>
        <HeroSection />
        <Values/>
        <Achievements/>
        <Experience/>
        <Team/>
        <Client/>
    </Box>
  )
}

export default About
