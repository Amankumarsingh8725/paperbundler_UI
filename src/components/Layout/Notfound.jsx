import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { FiAlertOctagon } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Notfound = () => {
  return (
    <Container h={'90vh'}>
        <VStack h={'full'} spacing={'4'} justifyContent={'center'}>
           <FiAlertOctagon size={'5rem'} />
           <Heading>Page Not Found</Heading>
           <Link to='/'>
            <Button colorScheme='yellow'>Go to Home</Button>
           </Link>
        </VStack>
    </Container>
  )
}

export default Notfound