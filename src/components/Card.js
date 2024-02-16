import { Button, Card, CardBody, CardFooter, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc }) => {

  return (
  <Card className='chandra-card'>
  <CardBody>
    <Image
      src={imageSrc}
      borderRadius='lg'
    />
    <VStack spacing='2' >
          <Heading size='md' m={2} >{ title }</Heading>
      <Text>
        { description }
      </Text>

    </VStack>
      </CardBody>

  <CardFooter>
      <Button variant='solid' colorScheme='blue'>
 <Text>
            See More &nbsp;
          </Text> 
           <FontAwesomeIcon icon={faArrowRight} size='1x' />     
          </Button>
  </CardFooter>
  
</Card>
  );
};

export default Cards;
