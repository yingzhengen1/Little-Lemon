import { Box, Card, CardBody, CardHeader, HStack, Heading, VStack,Text } from '@chakra-ui/react'
import React from 'react'

const Testimonials = () => {
  return (
    <VStack maxW={'50%'}>
        <Heading fontSize={"xx-large"}>Testimonials</Heading>

        <HStack>
        <Card maxW={'sm'}>
            <CardBody>
            <HStack>
                <VStack>
                    <Text>Rating</Text>
                    
                    <Text>Review Text</Text>
                </VStack>
                <Text>name</Text>
            </HStack>
            </CardBody>
        </Card>
        <Card maxW={'sm'}>
            <CardBody>
            <HStack>
                <VStack>
                    <Text>Rating</Text>
                    
                    <Text>Review Text</Text>
                </VStack>
                <Text>name</Text>
            </HStack>
            </CardBody>
        </Card>
        <Card maxW={'sm'}>
            <CardBody>
            <HStack>
                <VStack>
                    <Text>Rating</Text>
                    
                    <Text>Review Text</Text>
                </VStack>
                <Text>name</Text>
            </HStack>
            </CardBody>
        </Card>
        <Card maxW={'sm'}>
            <CardBody>
            <HStack>
                <VStack>
                    <Text>Rating</Text>
                    
                    <Text>Review Text</Text>
                </VStack>
                <Text>name</Text>
            </HStack>
            </CardBody>
        </Card>
        </HStack>

    </VStack>
  )
}

export default Testimonials