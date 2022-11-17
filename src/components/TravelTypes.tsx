import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'

const TravelTypes: React.FC = () => {
  const variant = useBreakpointValue({
    base: false,
    md: true
  })

  if (!variant) {
    return (
      <Grid
        templateRows=" 1fr, 1fr, 1fr"
        templateColumns="1fr 1fr"
        gap={'1em'}
        px="2em"
        py="1.5em"
        position="relative"
        _before={{
          content: "''",
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '5em',
          height: '1px',
          background: 'gray.700'
        }}
      >
        <GridItem
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gap="0.5em"
        >
          <Text as="span" fontSize="2em" color="yellow.400">
            •
          </Text>
          <Text as="span" fontWeight="bold" color="gray.700" fontSize="1.1em">
            vida noturna
          </Text>
        </GridItem>

        <GridItem
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap="0.5em"
        >
          <Text as="span" fontSize="2em" color="yellow.400">
            •
          </Text>
          <Text as="span" fontWeight="bold" color="gray.700" fontSize="1.1em">
            praia
          </Text>
        </GridItem>

        <GridItem
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gap="0.5em"
        >
          <Text as="span" fontSize="2em" color="yellow.400">
            •
          </Text>
          <Text as="span" fontWeight="bold" color="gray.700" fontSize="1.1em">
            moderno
          </Text>
        </GridItem>

        <GridItem
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap="0.5em"
        >
          <Text as="span" fontSize="2em" color="yellow.400">
            •
          </Text>
          <Text as="span" fontWeight="bold" color="gray.700" fontSize="1.1em">
            clássico
          </Text>
        </GridItem>

        <GridItem
          colSpan={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="0.5em"
        >
          <Text as="span" fontSize="2em" color="yellow.400">
            •
          </Text>
          <Text as="span" fontWeight="bold" color="gray.700" fontSize="1.1em">
            e mais...
          </Text>
        </GridItem>
      </Grid>
    )
  }

  return (
    <HStack
      px="2em"
      py="4em"
      maxW="1200px"
      justify="center"
      alignItems="center"
      mx="auto"
      spacing="8em"
    >
      <Flex justify="center" alignItems="center" direction="column" gap="1em">
        <Image src="./cocktail.svg" w="3em" alt="Coquitel" />

        <Text as="p" fontSize="1.1em" fontWeight="bold" color="gray.700">
          vida noturna
        </Text>
      </Flex>

      <Flex justify="center" alignItems="center" direction="column" gap="1em">
        <Image src="./surf.svg" w="3em" alt="surf" />

        <Text as="p" fontSize="1.1em" fontWeight="bold" color="gray.700">
          praia
        </Text>
      </Flex>

      <Flex justify="center" alignItems="center" direction="column" gap="1em">
        <Image src="./building.svg" w="3em" alt="Edifício" />

        <Text as="p" fontSize="1.1em" fontWeight="bold" color="gray.700">
          moderno
        </Text>
      </Flex>

      <Flex justify="center" alignItems="center" direction="column" gap="1em">
        <Image src="./museum.svg" w="3em" alt="Musel" />

        <Text as="p" fontSize="1.1em" fontWeight="bold" color="gray.700">
          clássico
        </Text>
      </Flex>

      <Flex justify="center" alignItems="center" direction="column" gap="1em">
        <Image src="./earth.svg" w="3em" alt="Globo" />

        <Text as="p" fontSize="1.1em" fontWeight="bold" color="gray.700">
          e mais...
        </Text>
      </Flex>
    </HStack>
  )
}

export default TravelTypes
