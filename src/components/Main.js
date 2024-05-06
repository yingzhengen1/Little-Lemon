import { Button, Flex, Heading, Text, Image, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import Restaurent from '../images/restaurant.jpg'

const Main = () => {
  return (
    <HStack justify={"center"}>
        <VStack align={"start"} maxW={"25%"}>
            <Heading fontSize={"xxx-large"}>Little Lemon</Heading>
            <Text>Chicago</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Button colorScheme='blackAlpha' size={'sm'}>Reserve a Table</Button>
        </VStack>
        <Image src={Restaurent} maxW={"25%"}></Image>
    </HStack>
  )
}

export default Main