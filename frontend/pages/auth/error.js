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
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

import { getCsrfToken } from "next-auth/react"

export default function error({ csrfToken }) {
  return (
    <Container style={{ marginTop: '200px', marginBottom: '5%' }}>
      <Alert status='error'>
        <AlertIcon />
        Action failed.
      </Alert>
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
