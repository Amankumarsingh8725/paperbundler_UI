import { Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = ({color="yellow.500"}) => {
  return (
    <VStack h="100vh" justifyContent={"center"}>
        <div style={{transform:"scale(4)"}}>
            <Spinner color={color} size='xl' thickness='3px' speed='0.65s' />
            {/* <h1>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1> */}
        </div>
    </VStack>
  )
}

export default Loader