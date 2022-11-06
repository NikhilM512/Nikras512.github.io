import { Avatar, Box, Image, Link, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { Navbar } from "../components/Navbar"
import { Aboutme } from "./Aboutme"
import backgroundImg from '../Images/background.jpg'


export const Home=()=>{
    return(
        <div class="Home">
        <Box w='100%' h='auto' boxSizing={'border-box'} margin='0px' padding={'0px'} >
            <Navbar></Navbar>
            <image></image>
               <Image  position={'absolute'} h='666px' w='100%' src={backgroundImg} alt='Wallpaper'></Image>
                <img style={{position:'relative',borderRadius:"50%",height:"277px",top:"44px",left:'177px'}} src='https://avatars.githubusercontent.com/u/105916881?s=400&u=3e36eb3b4c166898ccb58d1a4501d99f7551b34f&v=4' alt='profilepic'/>
                <Box position={'relative'} top={'44px'} display={'flex'} left='177px' flexDirection='column' w='66%' alignItems={'flex-start'}>
                    <Text fontSize={'6xl'} fontWeight={'bold'} color={'#ccc'}  fontFamily={'sans'}  >Hello, </Text>
                    <Text fontSize={'5xl'} marginTop={'-17px'} fontWeight={'bold'}  fontFamily={'sans'} color={'#CB2D6F'} >I'm Nikhil Magar</Text>
                    <Text fontSize={'4xl'} color={'teal'} fontFamily={'sans-serif'}>Aspiring MERN Developer</Text>
                    <Text fontSize={'4xl'} color={'teal'} fontFamily={'sans-serif'}  >graduated from Masai School</Text>
                </Box>
            <div id='#about'>
            <Aboutme></Aboutme>
            </div>
            </Box>
            </div>
    )
}
