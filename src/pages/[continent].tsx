import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import About from '../components/About'
import Cities from '../components/Cities'
import ContinentBanner from '../components/ContinentBanner'

const pages: React.FC = () => {
  return (
    <>
      <Head>
        <title>Europa | Worldtrip</title>
      </Head>

      <Box as="main">
        <ContinentBanner />

        <About />

        <Cities />
      </Box>
    </>
  )
}

export default pages
