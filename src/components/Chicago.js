import { HStack, Heading, VStack ,Text, Image,Box} from '@chakra-ui/react'
import React from 'react'
import Restauranfood from '../images/restauranfood.jpg'

const Chicago = () => {
  return (
    <HStack maxW={'50%'} justify={"end"}>
        <VStack justify={'start'} align={'start'} w={"50%"}>
            <Heading fontSize={"xxx-large"}>Little Lemon</Heading>
            <Text>Chicago</Text>
            <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
        </VStack>
        <VStack w={"50%"}>
            <Image maxW={"100%"} src={Restauranfood} />
        </VStack>
    </HStack>
  )
}

export default Chicago