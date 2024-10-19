import React from 'react'
import {Box, HStack, Heading, Stack, VStack,}  from '@chakra-ui/react'
import {TiSocialInstagramCircular,TiSocialLinkedinCircular} from 'react-icons/ti'

const Footer = () => {
  return (
         <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
          <Stack direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width={'full'}>
                <Heading children='All Right Reserved' color={'white'} size={'lg'}/>
                <Heading fontFamily={'body'} size={'sm'}
                children='@Aman Kumar Singh' color={'yellow.400'} />
            </VStack>
            <HStack spacing={['2','3']} justifyContent={'center'} color={'white'} fontSize={'40'}>
                <a href='https://www.instagram.com/amankumarsingh8820?igsh=MXRxdHg4cWEzMno5Mg==' traget={'_blank'}><TiSocialInstagramCircular /></a>
                <a href='https://www.linkedin.com/in/aman2002' traget={'_blank'}><TiSocialLinkedinCircular /></a>
            </HStack>
          </Stack>
         </Box>
  )
}

export default Footer