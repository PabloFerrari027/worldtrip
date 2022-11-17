import { Button, Icon } from '@chakra-ui/react'
import { RiArrowLeftSLine } from 'react-icons/ri'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const ReturnButton: React.FC = () => {
  const { asPath } = useRouter()

  if (asPath !== '/')
    return (
      <Button
        position="absolute"
        left="2em"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        variant="unstyled"
      >
        <Link href="/">
          <Icon
            as={RiArrowLeftSLine}
            fontSize={['1.6em', '1.6em', '2em']}
            display="flex"
            m="auto"
            color="gray.600"
          />
        </Link>
      </Button>
    )

  return <></>
}

export default ReturnButton
