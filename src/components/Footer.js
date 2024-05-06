import { Flex, HStack, Heading ,Text, VStack} from '@chakra-ui/react'
import React from 'react'
import Logo from '../images/Logo.svg'


function Footer() {
  return (
    <HStack>
      <img src={Logo}></img>
    <HStack align={"start"} >
        <VStack justify={'start'}>
            <Heading >Doormat Navigation</Heading>
            <Text margin="0">Home</Text>
            <Text margin="0">About</Text>
            <Text margin="0">Menu</Text>
            <Text margin="0">Reservations</Text>
            <Text margin="0">Order Online</Text>
            <Text margin="0">Login</Text>
        </VStack>
        <VStack justify={'start'}>
            <Heading>Contact</Heading>
            <Text margin="0">Adress</Text>
            <Text margin="0">Phone Number</Text>
            <Text margin="0">email</Text>
        </VStack>
        <VStack justify={'start'}>
            <Heading>Social Media Links</Heading>
            <Text margin="0">Adress</Text>
            <Text margin="0">Phone Number</Text>
            <Text margin="0">email</Text>
        </VStack>
    </HStack>
    </HStack>
    
  )
}

export default Footer