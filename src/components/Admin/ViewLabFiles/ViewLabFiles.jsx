import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Th, Image, Thead, Tr, Td } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from '../Sidebar.jsx'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { getAllLabfiles } from '../../../redux/actions/labfile.js';
import Loader from '../../Layout/Loader'
import { deleteLabfile } from '../../../redux/actions/authworks.js';

const ViewLabFiles = () => {

  const dispatch = useDispatch()
  const { loading1, message, error } = useSelector(state => state.auth)
  const { labfiles, loading } = useSelector(state => state.labfile)


  useEffect(() => {

    dispatch(getAllLabfiles())
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" })
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' })
    }
  }, [dispatch, error, message])



  //   const labfile = [{
  //     _id: 'hhhjhjhgchgsdjfgjwgfyew',
  //     filename: 'Database',
  //     coursecode: 'cse1324',
  //     semester: '3',
  //     views:'243',
  //     poster:{
  //       url:"hdjhdsjkhfjkhfdkh"
  //     }
  //  }];
  // 
  //   const updateHandler=(userId)=>{
  //     console.log(userId);
  //   }

  const deleteButtonHandler = (fileId) => {
    // console.log(userId);
    dispatch(deleteLabfile(fileId))
  }

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '1.5fr 5fr']}>
      <Sidebar />
      {
        loading ? (<Loader color='purple.500' />) : (
          <Box p={['0', '8']} overflow={'auto'}>
            <Heading textTransform={'uppercase'} children='All Labfiles'
              my='16' textAlign={['center', 'left']} />

            <TableContainer w={['100vw', 'full']} overflow={'auto'}>
              <Table variant={'simple'} size={'lg'}>
                <TableCaption>All available labfiles in the database</TableCaption>


                <Thead>
                  <Tr>
                    <Th>Id</Th>
                    <Th>Created At</Th>
                    <Th>Poster</Th>
                    <Th>Filename</Th>
                    <Th>Course_code</Th>
                    <Th>Semester</Th>
                    <Th>Views</Th>
                    <Th isNumeric>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    labfiles.map(item => (
                      <Row
                        deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} loading1={loading1} />
                    ))
                  }
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )
      }
      {/* <Sidebar /> */}
    </Grid>
  )

}

export default ViewLabFiles


function Row({ item, deleteButtonHandler, loading1 }) {
  const imageurl = item.poster.url.replace('.pdf', '.png');

  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.createdAt.split('T')[0]}</Td>
      <Td>
        <Image src={imageurl} />
      </Td>
      <Td>{item.filename}</Td>
      <Td>{item.coursecode}</Td>
      <Td>{item.semester}</Td>
      <Td>{item.views}</Td>
      <Td is isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button color={'puple.600'}
            onClick={() => deleteButtonHandler(item._id)} isLoading={loading1}><RiDeleteBin7Line /></Button>
        </HStack>
      </Td>
    </Tr>
  )
}