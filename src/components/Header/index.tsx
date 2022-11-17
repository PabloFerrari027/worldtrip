import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import ReturnButton from './ReturnButton'

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      h={['6.25em', '6.25em', '8em']}
      flex="1"
      bg="white"
    >
      <Flex
        w="100%"
        maxW="1200px"
        px="2em"
        justify="center"
        alignItems="center"
        mx="auto"
        position="relative"
      >
        <ReturnButton />

        <Image src="./logo.svg" alt="Worldtrip" h={['2.2em', '2.2em', '3em']} />
      </Flex>
    </Flex>
  )
}

export default Header
