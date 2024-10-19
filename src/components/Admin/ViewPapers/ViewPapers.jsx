import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Th, Image, Thead, Tr, Td } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from '../Sidebar.jsx'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuestionpapers } from '../../../redux/actions/questionpaper.js'
import { toast } from 'react-hot-toast'
import Loader from '../../Layout/Loader'
import { deletePaper } from '../../../redux/actions/authworks.js'



const Viewpapers = () => {

  const dispatch = useDispatch()

  const { questionpapers, loading } = useSelector(state => state.questionpaper)
  const { loading1, message, error } = useSelector(state => state.auth)


  useEffect(() => {

    dispatch(getAllQuestionpapers())
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" })
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' })
    }
  }, [dispatch, error, message])

  //   const labfiles = [{
  //     _id: 'hhhjhjhgchgsdjfgjwgfyew',
  //     papername: 'Data structures',
  //     year: '2023',
  //     semester: '3',
  //     views:'243',
  //     poster:{
  //       url:"hdjhdsjkhfjkhfdkh"
  //     }
  // }];


  const deleteButtonHandler = (paperId) => {
    // console.log(userId);
    dispatch(deletePaper(paperId))
  }

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '1.5fr 5fr']}>
      <Sidebar />
      {
        loading ? (<Loader color='purple.500' />) : (
          <Box p={['0', '8']} overflow={'auto'}>
            <Heading textTransform={'uppercase'} children='All Question-papers'
              my='16' textAlign={['center', 'left']} />

            <TableContainer w={['100vw', 'full']} overflow={'auto'}>
              <Table variant={'simple'} size={'lg'}>
                <TableCaption>All available Questionpapers in the database</TableCaption>


                <Thead>
                  <Tr>
                    <Th>Id</Th>
                    <Th>Created At</Th>
                    <Th>Poster</Th>
                    <Th>Papername</Th>
                    <Th>Year</Th>
                    <Th>Semester</Th>
                    <Th>Views</Th>
                    <Th isNumeric>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    questionpapers.map(item => (
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

export default Viewpapers


function Row({ item, deleteButtonHandler, loading1 }) {
  const imageurl = item.poster.url.replace('.pdf', '.png');

  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.createdAt.split('T')[0]}</Td>
      <Td>
        <Image src={imageurl} />
      </Td>
      <Td>{item.questionpapername}</Td>
      <Td>{item.year}</Td>
      <Td>{item.semester}</Td>
      <Td>{item.views}</Td>
      <Td is isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => deleteButtonHandler(item._id)} isLoading={loading1}><RiDeleteBin7Line /></Button>
        </HStack>
      </Td>
    </Tr>
  )
}