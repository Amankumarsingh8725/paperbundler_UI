import React from 'react'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure, } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { RiMenu5Fill,RiLogoutBoxLine, RiDashboardLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user';

const Linkbutton = ({ url, title ,onClose}) => (
  <Link onClick={onClose} to={url}>
    <Button variant={"ghost"} >{title}</Button>
  </Link>
);
const Header = ({isAuthenticated=false,user}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch=useDispatch();

  const logoutHandler = ()=>{
    dispatch(logout());
    onClose();

  }
  

  return (
    <>
      {/* <ColorModeSwitcher /> */}
      
      <Button onClick={onOpen} colorScheme='yellow' position={'fixed'} top='4' left={'4'}>
        <RiMenu5Fill /></Button>
      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'2px'}>Welcome to PaperBundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'5'} alignItems={'flexstart'}>
              <Linkbutton onClose={onClose} url='/' title='Home'  />
              <Linkbutton onClose={onClose} url='/previouspapers' title='Question-Papers' />
              <Linkbutton onClose={onClose} url='/practicalfile' title='Practical-File' />
              <Linkbutton onClose={onClose} url='/contact' title='Contact Us' />
              <Linkbutton onClose={onClose} url='/aboutus' title='AboutUs' />
            </VStack>

            <HStack justifyContent={'space-evenly'} position='absolute' bottom={'2rem'}
              width={'85%'} alignItems={''}>
              {isAuthenticated ? (
              <>
              <VStack>
                <HStack>
                  <Link to='/profile'>
                    <Button colorScheme='yellow' onClick={onClose} >Profile</Button>
                  </Link>
                  <Button colorScheme='yellow' onClick={logoutHandler} >
                    <RiLogoutBoxLine />
                    Logout
                  </Button>
                </HStack>
                { user && user.role==="admin" &&
                <Link to='/admin/dashboard'>
                  <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
                    <RiDashboardLine />
                    Dashboard
                  </Button>
                </Link>}
              </VStack>
              </>) : (<>
                <Link to='/login'>
                  <Button colorScheme='yellow' onClick={onClose}>Login</Button>
                </Link>
                <p>OR</p>

                <Link to='/regsister'>
                  <Button colorScheme='yellow' onClick={onClose}>Signup</Button>
                </Link>
              </>)}

            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header