import { Box, Container, FormLabel, Heading, Input, VStack, Button, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { regsister } from '../../redux/actions/user'

export const fileuploadcss={
    cursor: "pointer",
    marginLeft: '-5%',
    width:'110%',
    height: "100%",
    border: 'none',
    backgroundcolor: 'white'
}

const fileuploadstyle={
    "&::file-selector-button": fileuploadcss,
}



const Regsister = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imagePrev, setImagePrev] = useState('')
    const [image, setImage] = useState('')



    const changeimagehandler=(e)=>{
        const file=e.target.files[0];
        const reader= new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            setImagePrev(reader.result);
            setImage(file)
        }
    }

    const dispatch=useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('email', email);
        formdata.append('password', password);
        formdata.append('file', image);

        dispatch(regsister(formdata))
    }

    return (
        <Container h={'95vh'} padding={'30'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'6'}>
                <Heading textTransform={'uppercase'} children={'Registration'} size={['xl', 'lg']} />

                <form onSubmit={submitHandler} style={{ width: '100%' }}>
                    <Box my={'4'} display={'flex'} justifyContent={'center'}>
                        <Avatar src={imagePrev} size={'xl'} />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children='Name' />
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
                        <FormLabel htmlFor='password' children='Password' />
                        <Input
                            required
                            id='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Enter Your Password' type='password' focusBorderColor='yellow.500' />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='chooseAvatar' children='Choose Avatar' />
                        <Input
                            accept='image/*'
                            required
                            id='chooseAvatar'
                            type='file' focusBorderColor='yellow.500'
                            onChange={changeimagehandler}
                            css={fileuploadstyle} />
                    </Box>
                    <Button my="4" colorScheme={'yellow'} type='submit'>
                        Sign Up
                    </Button>
                    <Box >
                        Already Signed Up? <Link to='/login'>
                            <Button fontSize={'sm'} variant='link'>
                                Login
                            </Button>
                        </Link>{"  "}
                        here
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Regsister