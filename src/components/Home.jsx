import { Avatar, Box, Image, Link, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { Navbar } from "../components/Navbar"
import { Aboutme } from "./Aboutme"
import { Calendar } from "./Calendar"
import { Contact } from "./Contact"
import { Header } from "./Header"
import { Projects } from "./Projects"
import { Skills } from "./Skills"


export const Home=()=>{
    return(
        <Box w='100%'>
            <Navbar/>
            <Header/>
            <Aboutme/>
            <Projects/>
            <Skills/>
            <Calendar username="Nikras512"/>
            <Contact/>
        </Box>    
    
      )
    }
//     return(
//         <Box w='100%' h='auto' boxSizing={'border-box'} margin='0px' padding={'0px'} >
//             <Navbar></Navbar>
//             {/* <Box w='100%'> */}
//                <Image  position={'absolute'} h='666px' w='100%' src='https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=400' alt='Wallpaper'></Image>
//                {/* <Image border='1px solid red' position={'relative'} borderRadius={'50%'} h='200px' w='200px' top={77}  alt='Profile_picture'>
//                 </Image> */}
//                 <img style={{position:'relative',borderRadius:"50%",height:"277px",top:"44px",left:'177px'}} src='https://avatars.githubusercontent.com/u/105916881?s=400&u=3e36eb3b4c166898ccb58d1a4501d99f7551b34f&v=4' alt='profilepic'/>
//                 <Box position={'relative'} top={'44px'} display={'flex'} left='177px' flexDirection='column' w='66%' alignItems={'flex-start'}>
//                     <Text fontSize={'6xl'} fontWeight={'bold'} color={'#ccc'}  fontFamily={'sans'}  >Hello, </Text>
//                     <Text fontSize={'5xl'} marginTop={'-17px'} fontWeight={'bold'}  fontFamily={'sans'} color={'#CB2D6F'} >I'm Nikhil Magar</Text>
//                     <Text fontSize={'4xl'} color={'teal'} fontFamily={'sans-serif'}>Aspiring MERN Developer</Text>
//                     <Text fontSize={'4xl'} color={'teal'} fontFamily={'sans-serif'}  >graduated from Masai School</Text>
//                 </Box>
//             {/* </Box> */}
//             <Aboutme></Aboutme>
//             </Box>
           
//     )
// }

//  {/* position={'relative'} top={'60px'} pr={'1090px'} position={'relative'}  */}
            // {/* position={'relative'} top={'60px'} pr={'1220px'} color={'#ccc'} */}
            // {/* position={'relative'} top={'60px'} pr={'1000px'}  */}
        // {/* </Box>top={'60px'} pr={'1220px'} */}
        // {/* position={'relative'} top={'60px'} pr={'970px'} */}