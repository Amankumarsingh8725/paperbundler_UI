import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { changePassword } from '../../redux/actions/profile'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
    const [oldpassword, setOldPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const submitHandler=e=>{
        e.preventDefault();
        dispatch(changePassword(oldpassword,newpassword));
        navigate('/profile')
    }


    const { loading } = useSelector(state => state.profile);

    return (
        <Container py='16' minH={'90vh'}>
            <form onSubmit={submitHandler}>
                <Heading children='Change Password' my={'16'}
                    textAlign={['center', 'left']} textTransform={'uppercase'} />
                <VStack spacing={'8'}>
                    <Input
                        required
                        value={oldpassword}
                        onChange={e => setOldPassword(e.target.value)}
                        placeholder='Enter Old Password' type='password'
                        focusBorderColor='yellow.500' />
                    <Input
                        required
                        value={newpassword}
                        onChange={e => setNewPassword(e.target.value)}
                        placeholder='Enter New Password' type='password'
                        focusBorderColor='yellow.500' />

                    <Button isLoading={loading} w={'full'} colorScheme='yellow' type='submit'>Change</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ChangePassword