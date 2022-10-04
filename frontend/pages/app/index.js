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
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'


const Index = () => {
  const router = useRouter()

  var hasloginError = false;

  const [inputEmail, setEmailInput] = useState('')
  const handleEmailInputChange = (e) => setEmailInput(e.target.value)
  const hasEmailError = !inputEmail.includes("@") && inputEmail.length > 0

  const [inputPassword, setPasswordInput] = useState('')
  const handlePasswordInputChange = (e) => setPasswordInput(e.target.value)
  const hasPasswordError = inputPassword.length < 7 && inputPassword.length > 0

  var buttonLoadingStatus = false;
  const handleButton = (e) => {
    console.log("button clicked.");
    buttonLoadingStatus = true;
    // handle credentials
    if (false) {
      router.push('/dashboard');
    } else {
      handleLoginError();
    }
  }
  const handleLoginError = () => {
    hasloginError = true;
    setTimeout(() => {
      buttonLoadingStatus = false;
    }, 3000)

  }


  return (
    <Container style={{ marginTop: '200px', marginBottom: '5%' }}>
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
        isLoading={buttonLoadingStatus}
        loadingText='Logging in'
        colorScheme='teal'
        variant='outline'
        onClick={handleButton}
        style={{ marginTop: '5%' }}
      >
        Sign in
      </Button>
    </Container>
  )
}

export default Index
