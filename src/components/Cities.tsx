import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Cities: React.FC = () => {
  return (
    <Flex
      w="100%"
      maxW="1200px"
      px="2em"
      alignItems="center"
      mx="auto"
      mt="3em"
      direction="column"
      pb="4em"
    >
      <Text as="h1" fontSize="2em" color="gray.700" fontWeight="bold" w="100%">
        Cidades + 100
      </Text>

      <Flex
        alignItems="space-between"
        justifyContent="space-between"
        wrap="wrap"
        gap="2em"
        w="100%"
        mt="2em"
      >
        <Flex
          w="250px"
          h="300px"
          overflow="hidden"
          mx="auto"
          borderRadius="14px"
          direction="column"
        >
          <Box w="100%" h="180px" bg="gray.100">
            <Image w="100%" h="100%" src="./london.jpeg" />
          </Box>

          <Flex
            h="120px"
            w="100%"
            border="1px solid"
            borderColor="yellow.400"
            borderBottomRadius="14px"
            borderTop={0}
            justifyContent="space-between"
            alignItems="center"
            px="2em"
          >
            <Box>
              <Text as="h2" fontSize="1.2em" fontWeight="bold" color="gray.700">
                Londres
              </Text>

              <Text as="p" fontSize=".9em" fontWeight="bold" color="gray.500">
                Reino Unido
              </Text>
            </Box>

            <Box borderRadius="100%" w="2em" h="2em" overflow="hidden">
              <Image src="./United-Kingdom-flag.png" w="100%" h="100%" />
            </Box>
          </Flex>
        </Flex>

        <Flex
          w="250px"
          h="300px"
          overflow="hidden"
          mx="auto"
          borderRadius="14px"
          direction="column"
        >
          <Box w="100%" h="180px" bg="gray.100">
            <Image w="100%" h="100%" src="./paris.jpg" />
          </Box>

          <Flex
            h="120px"
            w="100%"
            border="1px solid"
            borderColor="yellow.400"
            borderBottomRadius="14px"
            borderTop={0}
            justifyContent="space-between"
            alignItems="center"
            px="2em"
          >
            <Box>
              <Text as="h2" fontSize="1.2em" fontWeight="bold" color="gray.700">
                Paris
              </Text>

              <Text as="p" fontSize=".9em" fontWeight="bold" color="gray.500">
                França
              </Text>
            </Box>

            <Box borderRadius="100%" w="2em" h="2em" overflow="hidden">
              <Image src="./france-flag.webp" w="100%" h="100%" />
            </Box>
          </Flex>
        </Flex>

        <Flex
          w="250px"
          h="300px"
          overflow="hidden"
          mx="auto"
          borderRadius="14px"
          direction="column"
        >
          <Box w="100%" h="180px" bg="gray.100">
            <Image w="100%" h="100%" src="./roma.jpg" />
          </Box>

          <Flex
            h="120px"
            w="100%"
            border="1px solid"
            borderColor="yellow.400"
            borderBottomRadius="14px"
            borderTop={0}
            justifyContent="space-between"
            alignItems="center"
            px="2em"
          >
            <Box>
              <Text as="h2" fontSize="1.2em" fontWeight="bold" color="gray.700">
                Roma
              </Text>

              <Text as="p" fontSize=".9em" fontWeight="bold" color="gray.500">
                Itália
              </Text>
            </Box>

            <Box borderRadius="100%" w="2em" h="2em" overflow="hidden">
              <Image src="./Italy-flag.png" w="100%" h="100%" />
            </Box>
          </Flex>
        </Flex>

        <Flex
          w="250px"
          h="300px"
          overflow="hidden"
          mx="auto"
          borderRadius="14px"
          direction="column"
        >
          <Box w="100%" h="180px" bg="gray.100">
            <Image w="100%" h="100%" src="./amsterdam.jpg" />
          </Box>

          <Flex
            h="120px"
            w="100%"
            border="1px solid"
            borderColor="yellow.400"
            borderBottomRadius="14px"
            borderTop={0}
            justifyContent="space-between"
            alignItems="center"
            px="2em"
          >
            <Box>
              <Text as="h2" fontSize="1.2em" fontWeight="bold" color="gray.700">
                Amsterdã
              </Text>

              <Text as="p" fontSize=".9em" fontWeight="bold" color="gray.500">
                Holanda
              </Text>
            </Box>

            <Box borderRadius="100%" w="2em" h="2em" overflow="hidden">
              <Image src="./netherlands-flag.png" w="100%" h="100%" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Cities
