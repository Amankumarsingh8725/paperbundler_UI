import { Box, Container, Grid, Heading, Input, Select, VStack ,Image, Button} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar.jsx'
import { fileuploadcss } from '../../Auth/Regsister.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addLabfile } from '../../../redux/actions/authworks.js'
import { toast } from 'react-hot-toast'
const AddLabfile = () => {

  const [filename, setFilename] = useState('')
  const [coursecode, setCoursecode] = useState('')
  const [semester, setSemester] = useState('')
  const [pdffile, setPdffile] = useState('')
  const [pdffilePrev, setPdffilePrev] = useState('')

  const semesters = ["sem1", "sem2", "sem3", "sem4", "sem5", "sem6", "sem7", "sem8"];


  const changeimagehandler=(e)=>{
    const file=e.target.files[0];
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      setPdffilePrev(reader.result);
        setPdffile(file)
    }
}

const dispatch=useDispatch();
const {  message, error, loading } = useSelector(state => state.auth);


const submitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('filename', filename);
    formdata.append('coursecode', coursecode);
    formdata.append('semester', semester);
    formdata.append('file', pdffile);

    dispatch(addLabfile(formdata))
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
}, [dispatch, error, message]);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '1.5fr 5fr']}>
    <Sidebar />
      <Container>
        <form onSubmit={submitHandler}>
          <Heading textTransform={'uppercase'} children='Add Lab Files' my='16' textAlign={['center', 'left']} />
          <VStack m={'auto'} spacing={'12'}>
            <Input
              value={filename}
              onChange={e => setFilename(e.target.value)}
              placeholder='Filename' type='text'
              focusBorderColor='purple.300' />
            <Input
              value={coursecode}
              onChange={e => setCoursecode(e.target.value)}
              placeholder='Coursecode' type='text'
              focusBorderColor='purple.300' />
            <Select focusBorderColor='purple.300' value={semester} onChange={e => setSemester(e.target.value)}>
              <option value=''>Semester</option>
              {semesters.map(item => (
                <option value={item} key={item}>{item}</option>
              ))}
            </Select>
            <Input
              accept='pdf/*'
              required
              type='file' focusBorderColor='purple.300'
              onChange={changeimagehandler}
              css={{
                "&::file-selector-button":{
                  ...fileuploadcss,color:'purple',
                },
              }} />

              {pdffilePrev && (
                // src={pdffilePrev} boxSize='64' objectFit={"contain"}
                <iframe  src={pdffilePrev}  title={'PDF Preview'} />
              )}
              <Button isLoading={loading} w={'full'} colorScheme='purple' type='submit' mb={'8'}>Upload File</Button>
          </VStack>
        </form>
      </Container>
      {/* <Sidebar /> */}
    </Grid>
  )

}

export default AddLabfile