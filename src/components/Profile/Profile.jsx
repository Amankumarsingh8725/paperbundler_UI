import { Avatar, Button, Container, HStack, Heading, Stack, VStack, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Input, ModalFooter, useDisclosure, ModalHeader } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { fileuploadcss } from '../Auth/Regsister';
import { updateProfilePicture } from '../../redux/actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../redux/actions/user';
import { toast } from 'react-hot-toast';

const Profile = ({ user }) => {

    const { isOpen, onClose, onOpen } = useDisclosure()

    const dispatch = useDispatch();
    const { message, error, loading } = useSelector(state => state.profile);
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' })
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' })
        }
    }, [dispatch, error, message]);


    const changeImageSubmitHandler = async (e, image) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('file', image);
        await dispatch(updateProfilePicture(formdata))
        dispatch(loadUser())
    }

    return (
        <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
            <Heading children='Profile' m={'8'} textTransform={'uppercase'} />
            <Stack justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                padding={'8'}
                spacing={['8', '16']}>
                <VStack>
                    <Avatar boxSize={'44'} src={user.avatar.url} />
                    <Button onClick={onOpen} colorScheme='yellow' variant={'ghost'}>
                        Change Photo
                    </Button>
                </VStack>

                <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
                    <HStack>
                        <Text children='Name: ' fontWeight={'bold'} />
                        <Text children={user.name} />
                    </HStack>
                    <HStack>
                        <Text children='Email: ' fontWeight={'bold'} />
                        <Text children={user.email} />
                    </HStack>
                    <HStack>
                        <Text children='CreatedAt: ' fontWeight={'bold'} />
                        <Text children={user.createdAt.split('T')[0]} />
                    </HStack>
                    <HStack>
                        <Text children='Role: ' fontWeight={'bold'} />
                        <Text children={user.role} />
                    </HStack>
                    <Stack direction={['column', 'row']} alignItems={'center'}>
                        <Link to='/updateprofile'>
                            <Button>Update Profile</Button>
                        </Link>
                        <Link to='/changepassword'>
                            <Button>Change Password</Button>
                        </Link>
                    </Stack>
                </VStack>
            </Stack>
            <ChangePhotoBox isOpen={isOpen} Loading={loading} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} />
        </Container>
    )
}

export default Profile

function ChangePhotoBox({ isOpen, onClose,Loading ,changeImageSubmitHandler }) {

    const [image, setImage] = useState('')
    const [imagePrev, setImagePrev] = useState('')


    const changImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file)
        }
    }

    const closeHandler = () => {
        onClose();
        setImagePrev('')
        setImage('');
    }
    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
                            <VStack spacing={'8'}>
                                {
                                    imagePrev && <Avatar src={imagePrev} boxSize={'48'} />
                                }
                                <Input type='file' css={{ "&::file-selector-button": fileuploadcss }} onChange={changImage} />
                                <Button isLoading={Loading}  width={'full'} colorScheme='yellow' type='submit'>Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeHandler}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}