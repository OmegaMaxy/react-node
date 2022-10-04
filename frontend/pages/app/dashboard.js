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
  Link
} from '@chakra-ui/react'
import React, { useEffect, useState } from "react"
import { NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { Suggestion } from '../../types'
import SuggestionService from '../../services/SuggestionService'

const Dashboard = () => {
  const router = useRouter()

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  useEffect(() => {
    // on init
    getLatestSuggestions();
  });
  const getLatestSuggestions = () => {
    const response: AxiosResponse<Suggestion[]> = await SuggestionService.getLatestSuggestions();
    setSuggestions(res.data);
  }

  return (
    <Container style={{ marginTop: '200px', marginBottom: '5%' }}>
      <Heading>Dashboard for {currentProject}</Heading>

      <h3>Latest suggestions for this project</h3>
      { suggestions ? suggestions.map() : <p>Empty board... <NextLink href={href} passHref><Link>Share your board here.</Link></NextLink></p>
    </Container>
  )
}

export default Dashboard
