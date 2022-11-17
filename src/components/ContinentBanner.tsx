import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const ContinentBanner: React.FC = () => {
  return (
    <Flex
      w="100%"
      h={['15em', '15em', '20em']}
      alignItems="flex-start"
      justifyContent="flex-end"
      direction="column"
      bgImage="./europe.webp"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={['6', '6', '12']}
      px={['8', '8', '16']}
    >
      <Text as="strong" fontSize="2em" color="white" fontWeight="bold">
        Europa
      </Text>
    </Flex>
  )
}

export default ContinentBanner
