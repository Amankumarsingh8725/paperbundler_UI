import { Box, Container, Heading, Input, VStack, Button, FormLabel, Textarea, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { contact } from '../../redux/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const dispatch=useDispatch();
    const { loading } = useSelector(state => state.user);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(contact(name, email, msg))
    }


   
    return (
        <Container h='85vh' marginTop={'10'}>
            <VStack justifyContent={'center'} spacing={'6'}>
                <Heading children='Contact Us' />
                <form onSubmit={submitHandler} style={{ width: '100%' }}>
                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children='Enter Name' />
                        <Input
                            required
                            id='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder='abc' type='text' focusBorderColor='yellow.500' />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='email' children='Email Addess' />
                        <Input
                            required
                            id='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='abc@gmail.com' type='email' focusBorderColor='yellow.500' />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='msg' children='Your Message' />
                        <Textarea
                            required
                            id='msg'
                            value={msg}
                            onChange={e => setMsg(e.target.value)}
                            placeholder='Enter Your Massage....' focusBorderColor='yellow.500' />
                    </Box>
                    <Button isLoading={loading} my="4" colorScheme={'yellow'} type='submit'>
                        Send Mail
                    </Button>
                </form>
            </VStack>
        </Container>
    )
}

export default Contact