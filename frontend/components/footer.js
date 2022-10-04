import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt="100px">
      &copy; {new Date().getFullYear()} Dazzy Kyei. All Rights Reserved.{' '}
      <a href="https://buymeacoffee.com/dazzy" _target="_blank" style={{color: `#39f;`}}>
        Support me here.
      </a>
    </Box>
  )
}

export default Footer
