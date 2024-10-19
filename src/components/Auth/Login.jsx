import { Box, Container, FormLabel, Heading, Input, VStack,Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { login } from '../../redux/actions/user'
import {useDispatch, useSelector} from "react-redux";
import { toast } from 'react-hot-toast';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const submitHandler=(e)=>{

        e.preventDefault();
        dispatch(login(email,password))

    }

    const { isAuthenticated } = useSelector(state => state.user);

    useEffect(() => {
        if (!isAuthenticated) {
          toast.error("Login First to access this page");
        }
      }, [dispatch,isAuthenticated]);


    return (
        <Container h={'95vh'} padding={'30'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'6'}>
                <Heading children={'Welcome to PaperBundler'} size={['xl','lg']}/>

                <form onSubmit={submitHandler} style={{ width: '100%' }}>
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
                        <FormLabel htmlFor='password' children='Password' />
                        <Input
                            required
                            id='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Enter Your Password' type='password' focusBorderColor='yellow.500' />
                    </Box>
                    <Box>
                        <Link to='/forgetpassword'>
                            <Button fontSize={'sm'} variant='link'>
                                Forget password?
                            </Button>
                        </Link>
                    </Box>
                    <Button my="4" colorScheme={'yellow'} type='submit'>
                        Login
                    </Button>
                    <Box >
                        New User? <Link to='/regsister'>
                            <Button fontSize={'sm'} variant='link'>
                                Signup
                            </Button>
                        </Link>{ "  "}
                        here
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Login