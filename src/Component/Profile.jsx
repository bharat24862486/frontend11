import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Nav from './Nav'

const Profile = () => {
    let name = localStorage.getItem('userName')
  return (
    <Box>
        <Nav />
        <Heading>profile</Heading>

        <Heading>Name: {name}</Heading>
      
    </Box>
  )
}

export default Profile
