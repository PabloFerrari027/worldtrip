import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import TravelTypes from '../components/TravelTypes'

export default function Home() {
  return (
    <>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>

      <Box as="main">
        <Banner />

        <TravelTypes />

        <Flex
          mx="auto"
          borderBottom="2px solid #000"
          width={['6em', '6em', '8em']}
        />

        <Text
          fontSize={['1.5em', '1.5em', '2em']}
          mt="1.5em"
          align="center"
          fontWeight="medium"
          color="gray.700"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>

        <Slider />
      </Box>
    </>
  )
}
