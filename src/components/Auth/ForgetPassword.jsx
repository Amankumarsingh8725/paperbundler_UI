import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPassword } from '../../redux/actions/profile'
import { toast } from 'react-hot-toast'

const ForgetPassword = () => {

    
    const [email, setEmail] = useState('')
    const dispatch=useDispatch();
    const {loading,message,error} =useSelector(state=>state.profile)

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(forgetPassword(email));
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' })
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' })
        }
    }, [dispatch,error, message]);




    return (
        <Container py='50' h={'77vh'} marginTop={'20'}>
            <form onSubmit={submitHandler}>
                <Heading textAlign={['center', 'left']} textTransform={'uppercase'} children='Forget Password' my='10' />
                <VStack spacing={'8'}>
                    <Input
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='abc@gmail.com' type='email' focusBorderColor='yellow.500' />
                    <Button isLoading={loading} type='submit' w={'full'} colorScheme='yellow'>
                        Send Reset Link
                    </Button>
                </VStack>
            </form>
        </Container>
        )
}

export default ForgetPassword