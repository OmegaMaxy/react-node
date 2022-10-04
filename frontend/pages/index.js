import { Heading, Text, Box, Button, Highlight, useColorModeValue, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

function HomePage() {
  return (
    <>
      <Box maxW='32rem' mt='2%' style={{marginTop: '50px'}}>
        <Heading mb={4}>Old school suggestion boards modernized</Heading>
        <Text fontSize='xl'>
          <Highlight query="{Suggestions}" styles={{ px: '1', py: '1', bg: useColorModeValue('purple.500', 'orange.200') }}>{'{Suggestions}'}</Highlight> helps businesses or organizations around the world receive suggestions from anyone, anywhere in the
          world.
        </Text>
        <NextLink href='/api/auth/auth/new-user' passHref>
          <Button size='lg' colorScheme='green' mt='24px'>
            Create a free account
          </Button>
        </NextLink>
        <br/>
        <NextLink href='/app/' passHref style={{marginTop: "500px"}}>
          <Link style={{color: "#39f"}}>Or login here</Link>
        </NextLink>
      </Box>
    </>
  );
}

export default HomePage
