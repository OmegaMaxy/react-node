import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }) {
  return (
    <Container style={{ marginTop: '200px', marginBottom: '5%' }}>
      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        { hasloginError ?
          (
            <Alert status='error'>
              <AlertIcon />
              Wrong credentials, could not login.
            </Alert>
          ) : (<></>)
        }
        <FormControl isInvalid={hasEmailError} style={{marginBottom: '5%'}} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            name="username"
            value={inputEmail}
            onChange={handleEmailInputChange}
          />
          {hasEmailError == "" ? (
            <p></p>
          ) : (
            <FormErrorMessage>Email is not valid.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={hasPasswordError} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type='password'
            value={inputPassword}
            onChange={handlePasswordInputChange}
          />
          {!hasPasswordError ? (
            <p></p>
          ) : (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          colorScheme='teal'
          variant='outline'
          style={{ marginTop: '5%' }}
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
