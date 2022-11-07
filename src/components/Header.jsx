import { Box, Circle, Flex, HStack, IconButton, Image, Stack, Text, useColorMode, VStack } from "@chakra-ui/react"
import profileImg from "../Images/profilePic.png"
import {FaSun,FaMoon} from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/react'

export const Header=()=>{

    // const [isNotSmallerScreen]   = useMediaQuery('(min-width:600px)')

    return(
        <Box  id='header-sec' display={'flex'} alignItems={'center'} w={'100%'} margin={'auto'}  h={{sm: "700px", md: "700px", lg:"700px"}} >
            {/* <Stack  border={'3px solid green'} h={{sm: "100%", md: "100%", lg:"100%"}} w={'100%'} margin={'auto'} pl={{sm: "0px", md: "0px", lg:"105px"}}> */}
                {/* <Flex  direction={isNotSmallerScreen?"row":"column"} */}
                <Box display={'flex'} flexDirection={{base:"column",sm: "column", md: "column", lg:"row"}} 
                // spacing="200px" 
                // alignSelf={'flex-start'}
                w={'100%'}
                justifyContent='space-evenly'
                alignItems={'center'}
                h={{sm: "100%", md: "100%", lg:"50%"}}
                // border={'2px solid red'}
                // p={isNotSmallerScreen?'40':'0'}
                >
                    <Box  h={{base:"150px",sm: "200px", md: "250px", lg:"auto"}} w={{base:"150px",sm: "200px", md: "250px", lg:"auto"}} >
                    <Image src="https://avatars.githubusercontent.com/u/105916881?s=400&u=3e36eb3b4c166898ccb58d1a4501d99f7551b34f&v=4"
                    // {profileImg} 
                      w={'50%'}
                      border={'3px solid purple'}
                      boxSize={'300px'}
                      h={{base:"100%",sm: "100%", md: "100%", lg:"auto"}} 
                      boxShadow={'lg'}
                      backgroundColor={'transparent'}
                      borderRadius='full'
                    //   alignSelf={'center'}
                    //   mt={isNotSmallerScreen?'0':'12'}
                    //   mb={isNotSmallerScreen?'0':'12'}
                    // mt={isNotSmallerScreen?'0':16}
                    />
                    </Box>
                    <Box  color={'purple.500'}  align='flex-end' textAlign={'start'}>
                        <Text fontWeight={'semibold'} fontSize={{sm: "3xl", md: "4xl", lg:"5xl"}}>Hello,</Text>
                        <Text fontWeight={'semibold'} fontSize={{sm: "3xl", md: "4xl", lg:"5xl"}}>Welcome to my portfolio !</Text>
                        <Text fontWeight={'bold'} fontSize={{sm: "5xl", md: "6xl", lg:"7xl"}} bgGradient={'linear(to-r,purple.500,cyan.600,blue.500)'} bgClip='text'>I'm Nikhil Magar</Text>
                        <Text fontWeight={'semibold'} fontSize={{sm: "3xl", md: "4xl", lg:"5xl"}}>Aspiring Full Stack Web Developer</Text>
                        <Text ></Text>
                    </Box>
                </Box>
                {/* <Circle position={'absolute'} bg='blue.100' opacity={'0.1'} w='380px' h='300px' alignSelf={'flex-start'}>
                </Circle> */}
            {/* </Stack> */}
            {/* <hr color="grey" style={{color:"grey",height:"2px"}} /> */}
        </Box>
    )
}