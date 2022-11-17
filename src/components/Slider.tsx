import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import styles from '../styles/swiper.module.scss'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function App() {
  return (
    <Flex
      maxW="1100px"
      h={['15em', '20em']}
      justify="center"
      alignItems="center"
      mx="auto"
      mt="1.5em"
      mb="3em"
    >
      <Swiper
        className={styles.swiper}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            direction="column"
            bgImage="./europe.webp"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
            _before={{
              content: "''",
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.4)'
            }}
          >
            <Box position="relative" zIndex="2">
              <Text as="strong" fontSize="2em" color="white" fontWeight="bold">
                Europa
              </Text>

              <Text as="p" fontSize="1em" color="white" fontWeight="medium">
                O continente mais antigo.
              </Text>

              <Button
                variant="outline"
                color="white"
                fontSize=".9em"
                mt="1em"
                _hover={{ background: 'rgba(125,125,125,0.2)' }}
              >
                <Link href="/europe">Ver continente</Link>
              </Button>
            </Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            direction="column"
            bgImage="./american.avif"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
            _before={{
              content: "''",
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.4)'
            }}
          >
            <Box position="relative" zIndex="2">
              <Text as="strong" fontSize="2em" color="white" fontWeight="bold">
                América
              </Text>

              <Text as="p" fontSize="1em" color="white" fontWeight="medium">
                O maior continente do mundo.
              </Text>

              <Button
                variant="outline"
                color="white"
                fontSize=".9em"
                mt="1em"
                _hover={{ background: 'rgba(125,125,125,0.2)' }}
              >
                <Link href="/europe">Ver continente</Link>
              </Button>
            </Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            direction="column"
            bgImage="./africa.avif"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
            _before={{
              content: "''",
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.4)'
            }}
          >
            <Box position="relative" zIndex="2">
              <Text as="strong" fontSize="2em" color="white" fontWeight="bold">
                África
              </Text>

              <Text as="p" fontSize="1em" color="white" fontWeight="medium">
                O continente com a maior diversidade cultural, religiosa e
                social.
              </Text>

              <Button
                variant="outline"
                color="white"
                fontSize=".9em"
                mt="1em"
                _hover={{ background: 'rgba(125,125,125,0.2)' }}
              >
                <Link href="/europe">Ver continente</Link>
              </Button>
            </Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            direction="column"
            bgImage="./oceania.avif"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
            _before={{
              content: "''",
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.4)'
            }}
          >
            <Box position="relative" zIndex="2">
              <Text as="strong" fontSize="2em" color="white" fontWeight="bold">
                Oceania
              </Text>

              <Text as="p" fontSize="1em" color="white" fontWeight="medium">
                O continente mais novo.
              </Text>

              <Button
                variant="outline"
                color="white"
                fontSize=".9em"
                mt="1em"
                _hover={{ background: 'rgba(125,125,125,0.2)' }}
              >
                <Link href="/europe">Ver continente</Link>
              </Button>
            </Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            direction="column"
            bgImage="./asia.avif"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
            _before={{
              content: "''",
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.4)'
            }}
          >
            <Box position="relative" zIndex="2">
              <Text as="strong" fontSize="2em" color="white" fontWeight="bold">
                Ásia
              </Text>

              <Text as="p" fontSize="1em" color="white" fontWeight="medium">
                O continente mais populoso.
              </Text>

              <Button
                variant="outline"
                color="white"
                fontSize=".9em"
                mt="1em"
                _hover={{ background: 'rgba(125,125,125,0.2)' }}
              >
                <Link href="/europe">Ver continente</Link>
              </Button>
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
