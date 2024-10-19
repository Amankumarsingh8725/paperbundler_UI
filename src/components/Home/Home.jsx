import React from 'react'
import { Heading, Stack, VStack, Text, Button, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import "./Home.css"
import vg from "../../assets/images/logo.png"

const Home = () => {
  return <>
    <section className='home'>
      <div className='container'>
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          // spacing={["16", "56"]}
        >
          <VStack width={"full"} alignItems={["center","flex-end"]} justifyContent="center" textAlign={['center','left']} spacing={'6'}>
            <Heading children="LEARN FROM THE PAST PAPERS" size={"2xl"} />
            <Text fontSize='2xl' fontFamily={'cursive'} children="Find all the past papers of your desire" />
            <Link to="/papers">
              <Button size={'lg'} colorScheme="yellow">
              Explore Now
              </Button>
            </Link>
        </VStack>

        <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit="contain" />
      </Stack>
    </div>
  </section >
  </>
}

export default Home