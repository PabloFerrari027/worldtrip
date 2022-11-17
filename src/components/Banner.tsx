import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Banner: React.FC = () => {
  return (
    <Flex
      w="100%"
      h={['15em', '15em', '20em']}
      bgImage={'background.svg'}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <HStack
        maxW="1200px"
        px="2em"
        justify="center"
        alignItems="center"
        mx="auto"
        spacing="8"
      >
        <Flex direction="column" flex="1">
          <Text
            as="strong"
            fontSize={['1.5em', '1.3em', '3em']}
            lineHeight={['1.2em', '1.2em', '1.3em']}
            color="white"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>

          <Text
            as="p"
            fontSize={['1em', '.9em', '1.3em']}
            lineHeight={['1em', '1em', '1.1em']}
            mt="1em"
            color="white"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Box display={['none', 'none', 'block']}>
          <Image src="./Airplane.svg" w="18em" />
        </Box>
      </HStack>
    </Flex>
  )
}

export default Banner
