import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container style={{marginTop: '50%', translateX: '-50%'}}>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found :( .</Text>
      <Divider my={6} />

      <Box my={6}>
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
