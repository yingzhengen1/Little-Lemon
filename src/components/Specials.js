import { Box, Button, Flex, HStack, Heading ,Image,Text, VStack} from '@chakra-ui/react'
import React from 'react'
import Salad from '../images/greek salad.jpg'
import Bruchetta from '../images/bruchetta.svg'
import LemonDessert from '../images/lemon dessert.jpg'

const Specials = () => {
  return (
    <Box maxW={'50%'}>
        <HStack justify={"space-between"}>
            <Heading fontSize={"xx-large"}>Specials</Heading>
            <Button>Online Menu</Button>
        </HStack>


        <HStack>
        <VStack  w='33%'>
          <Image w='100%' src={Salad}/>
          <HStack justify={"space-between"}>
            <Text>Greek Salad</Text>
            <Text>12.99$</Text>
          </HStack>
          <Text>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </Text>
        </VStack>

        <VStack w='33%'>
          <Image w='100%' src={Bruchetta}/>
          <HStack justify={"space-between"}>
            <Text>Bruchetta</Text>
            <Text>5.99$</Text>
          </HStack>
          <Text>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </Text>

        </VStack>

        <VStack w='33%'>    
          <Image w='100%' src={LemonDessert}/>
          <HStack justify={"space-between"}>
            <Text>Lemon Dessert</Text>
            <Text>5.00$</Text>
          </HStack>
          <Text>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </Text>

        </VStack>
        </HStack>
        <Flex></Flex>
        <Flex></Flex>

    </Box>
  )
}

export default Specials