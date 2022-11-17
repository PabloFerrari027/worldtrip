import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'swiper/css/bundle'
import { theme } from '../styles/theme'
import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
