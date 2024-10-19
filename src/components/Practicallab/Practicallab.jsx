import { Button, Container, HStack, Heading, Input, Stack, Text, VStack, Image, Center, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { getAllLabfiles } from '../../redux/actions/labfile'

const openpdf = () => {
    // window.open(pdfUrl,'_blank');
    toast.success('PDF download successfully.');

}

const Files = ({ filename, pdf, coursecode, sem }) => {
    const pdfUrl = pdf.replace('/upload/', '/upload/fl_attachment/');
    const imageurl = pdf.replace('.pdf', '.png');
    return (
        <VStack className="practiclefile" alignItems={['center', 'center']} marginTop={'10'}>
            <Image src={imageurl} boxSize='60' objectFit={'contain'}  />
            <Heading textAlign={['center', 'left']} maxW='200px' fontFamily={'sans-serif'}
                children={filename} size={'md'} color={"yellow.500"} />
            <Text children={`CourseCode: ${coursecode}`} />
            <Text children={`Semester: ${sem}`} />
            <Button onClick={() => openpdf(pdf)} colorScheme='yellow' ><Link href={pdfUrl} download rel='noopener noreferrer' >Download</Link></Button>
        </VStack>
    )
}

const Practicallab = () => {

    const [keyword, setKeyword] = useState("");
    const [semester, setSemester] = useState('');

    const semesters = ["sem1", "sem2", "sem3", "sem4", "sem5", "sem6", "sem7", "sem8"];
    const dispatch = useDispatch()
    const { labfiles, error } = useSelector(state => state.labfile)



    useEffect(() => {

        dispatch(getAllLabfiles( semester,keyword))
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
    }, [semester, keyword, dispatch])

    return (
        <Container minH={"95vh"} paddingY={'8'} maxW={'container.md'}>
            <Heading children="All Practicle-Lab Files" m={'8'} />
            <Input value={keyword} onChange={(e) => { setKeyword(e.target.value); setSemester('') }} placeholder='Search a labfile'
                focusBorderColor='yellow.500' type='text' />
            <HStack overflow={'auto'} paddingY={'4'}>
                {
                    semesters.map((item, index) => (
                        <Button key={index} onClick={() => { setSemester(item); setKeyword('') }} minW={'60'}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>
            <Stack direction={['column', 'row']}
                flexWrap={'wrap'}
                justifyContent={['flex-start', 'space-evenly']}
                alignItems={['center', 'flex-start']}>
                {

                    labfiles.length > 0 ? (labfiles.map((item) => (
                        <Files
                        pdf={item.poster.url} sem={item.semester} filename={item.filename}
                         coursecode={item.coursecode} />)))
                        :
                        (<Center>
                            <Heading children="Loading.. Pls Wait" opacity={0.5} mt={"9vh"} />
                        </Center>)
                }
            
            </Stack>
        </Container>)
}

export default Practicallab