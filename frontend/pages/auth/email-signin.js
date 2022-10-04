import {
  Container,
  Heading,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react'

import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }) {
  return (
    <Container style={{ marginTop: '200px', marginBottom: '5%' }}>
      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <FormControl style={{marginBottom: '5%'}} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            name="username"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type='password'
          />
        </FormControl>
        <Button
          colorScheme='teal'
          variant='outline'
          style={{ marginTop: '5%' }}
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </Container>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
