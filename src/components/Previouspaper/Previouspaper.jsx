import { Button, Container, HStack, Heading, Input, Stack, Text, VStack, Center, Link ,Image} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuestionpapers } from '../../redux/actions/questionpaper'
import { toast } from 'react-hot-toast'

const openpdf = () => {
    // window.open(pdfUrl,'_blank');
    toast.success('PDF download successfully.');

}

const Questionpapers = ({ papername, pdf, category, sem, year }) => {
    const pdfUrl = pdf.replace('/upload/', '/upload/fl_attachment/');
    const imageurl = pdf.replace('.pdf', '.png');
    // border='2px' p={"6"}
    return (
        <VStack  className="practiclefile" alignItems={['center', 'center']} marginTop={'10'} >
            <Image src={imageurl} boxSize='60' objectFit={'contain'} />
            <Center>
                <Heading textAlign={['center', 'left']} maxW='200px' fontFamily={'sans-serif'}
                    children={papername} size={'md'} color={"yellow.500"} /></Center>
            <Text children={`Category: ${category}`} />
            <Text children={`Year: ${year}`} />
            <Text children={`Semester: ${sem}`} />
            <Button onClick={() => openpdf()} colorScheme='yellow' ><Link href={pdfUrl} download rel='noopener noreferrer' >Download</Link></Button>
        </VStack>
    )
}

const Previouspaper = () => {

    const [keyword, setKeyword] = useState("");
    const [semester, setSemester] = useState('')
    const [category, setCategory] = useState('')
    const dispatch = useDispatch()

    const {  questionpapers, error } = useSelector(state => state.questionpaper)



    useEffect(() => {

        dispatch(getAllQuestionpapers(category, semester, keyword))
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
    }, [category, semester, keyword, dispatch])

    const semesters = ["sem1", "sem2", "sem3", "sem4", "sem5", "sem6", "sem7", "sem8"];
    const categories = ["ESE", "MSE"];

    return (
        <Container minH={"95vh"} paddingY={'8'} maxW={'container.md'}>
            <Heading children="All Previous-Years Questionpapers" m={'8'} />
            <Input value={keyword} onChange={(e) => { setKeyword(e.target.value); setCategory(''); setSemester('') }} placeholder='Search Previous years Questionpapers'
                focusBorderColor='yellow.500' type='text' />
            <HStack paddingTop={'4'} alignItems={["center", "center"]}>
                {
                    categories.map((item, index) => (
                        <Button key={index} onClick={() => { setCategory(item); setKeyword(''); setSemester('') }} minW={'50'}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>
            <HStack overflow={'auto'} paddingY={'4'}>
                {
                    semesters.map((item, index) => (
                        <Button key={index} onClick={() => { setSemester(item); setCategory(''); setKeyword('') }} minW={'60'}>
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

                    questionpapers.length > 0 ? (questionpapers.map((item) => (
                        <Questionpapers papername={item.questionpapername} pdf={item.poster.url}
                            category={item.category} sem={item.semester} year={item.year} />)))
                        :
                        (<Center>
                            <Heading children="Loading.. Pls Wait" opacity={0.5} mt={"9vh"} />
                        </Center>)
                }
            </Stack>
        </Container>)
}

export default Previouspaper