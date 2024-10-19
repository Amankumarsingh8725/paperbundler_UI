import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from '../Sidebar.jsx'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { Line } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'

import { DoughnutChart, LineChart } from './Chart.js'
import { getDashboardStats } from '../../../redux/actions/authworks.js'
import Loader from '../../Layout/Loader'
import { toast } from 'react-hot-toast'


const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box w={['full', '20%']} boxShadow={'-3px 0 10px rgba(107,70,193,0.5)'} p="8" borderRadius={'lg'}>
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (<RiArrowUpLine color='green' />) :
          (<RiArrowDownLine color='red' />)}
      </HStack>
    </HStack>
    <Text children='Since Last Month' opacity={'0.6'} />
  </Box>
)

const Bar = ({ title, value, profit }) => (
  <Box py={4} px={['0', '20']}>
    <Heading size={'sm'} children={title} mb={'2'} />
    <HStack w={'full'} alignItems={'center'}>
      <Text children='0%' />
      <Progress w={'full'} value={profit ? value : 0} colorScheme='purple' />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
)





const Dashboard = () => {

  const dispatch = useDispatch()
  const { loading,
    stats,
    usercount,
    totalviewscount,
    usersProfit,
    totalviewsProfit,
    usersPercentage,
    totalviewsPercentage, message, error } = useSelector(state => state.auth)


  useEffect(() => {
    dispatch(getDashboardStats())
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' })
    }
  }, [dispatch,error])
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '1.5fr 5fr']}>
            <Sidebar />

      {
        loading ? (<Loader color='purple.500' />) : (
          <Box boxSizing='border-box' py={'16'} px={['4', '0']} >
            {stats && stats[11] && (
                <Text textAlign={'center'} opacity={0.5} children={`Last Change was on ${String(new Date(stats[11].createdAt)).split("G")[0]}`} />
            )}
            <Heading children='Dashboard' ml={['0', '16']} mb={'16'} textAlign={['center', 'left']} />
            <Stack direction={['column', 'row']} minH={'24'} justifyContent={'space-evenly'}>
              <Databox title='Views' qty={totalviewscount} qtyPercentage={totalviewsPercentage} profit={totalviewsProfit} />
              <Databox title='Users' qty={usercount} qtyPercentage={usersPercentage} profit={usersProfit} />
            </Stack>


            <Box m={['0', '16']} borderRadius={'lg'} p={['0', '16']} mt={['4', '16']}
              boxShadow={'-3px 0 10px rgba(107,70,193,0.5)'}>
              <Heading textAlign={['center', 'left']} size={'md'} children="Views Graph"
                pt={['8', '0']} ml={['0', '16']} />
              <LineChart dataArray={stats && (stats.map(item=>(item.totalviews)))} />
            </Box>
            <Grid templateColumns={['1fr', " 2fr 1fr"]}>
              <Box p={'4'}>
                <Heading textAlign={['center', 'left']} size={'md'} children='Progress Bar'
                  my={'8'} ml={['0', '16']} />
                <Box>
                  <Bar profit={totalviewsProfit} title='views' value={totalviewsPercentage} />
                  <Bar profit={usersProfit} title='Users' value={usersPercentage} />
                </Box>
              </Box>

              <Box p={['0', '16']} boxSizing='border-box' py={'4'}>
                <Heading textAlign={'center'} size={'md'} mb={'4'} children='Users' />
                <DoughnutChart users={usercount} views={totalviewscount} />
              </Box>


            </Grid>


          </Box>)
      }
      {/* <Sidebar /> */}
    </Grid>
  )
}

export default Dashboard