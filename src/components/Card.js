import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
    <VStack backgroundColor={"white"} borderRadius="1em" alignItems="start">
        <Image src={imageSrc} borderRadius="1em"></Image>
        <Heading textColor="black" fontSize="large" marginLeft="1em">{title}</Heading>
        <Text  marginLeft="1em" textColor="gray">{description}</Text>
        <Text textColor="black" marginLeft="1em" marginBottom="1em">See more <a ><FontAwesomeIcon icon={faArrowRight} size="1x"/></a></Text>
    </VStack>
    </>
  );
};

export default Card;
