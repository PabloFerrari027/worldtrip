import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const About: React.FC = () => {
  return (
    <Flex
      direction={['column', 'column', 'row']}
      w="100%"
      maxW="1200px"
      px="2em"
      justify="center"
      alignItems="center"
      mx="auto"
      mt="4em"
      gap={['2em', '2em', '6em']}
    >
      <Flex flex="1">
        <Text as="p" align="justify" color="gray.700">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Flex>

      <Flex flex="1" w="100%" justifyContent="space-between">
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Text as="strong" fontSize="2.5em" color="yellow.500" mb="-.2em">
            50
          </Text>
          <Text as="strong" color="gray.700">
            países
          </Text>
        </Flex>

        <Flex direction="column" justifyContent="center" alignItems="center">
          <Text as="strong" fontSize="2.5em" color="yellow.500" mb="-.2em">
            60
          </Text>
          <Text as="strong" color="gray.700">
            línguas
          </Text>
        </Flex>

        <Flex direction="column" justifyContent="center" alignItems="center">
          <Text as="strong" fontSize="2.5em" color="yellow.500" mb="-.2em">
            27
          </Text>
          <Text as="strong" color="gray.700">
            cidades + 100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default About
