import { Box, Button, Circle, Image, Text } from "@chakra-ui/react"
import Typical from "react-typical"
import Resume from "../Resume/Nikhil_Magar_Resume.pdf"
import profilePicCircular from "../Images/profilePicCircular.png"

export const Header=()=>{

    const downLoad_Resume_And_Open_In_New_Tab=()=>{
        window.open("https://drive.google.com/file/d/1GJJb4n_n1XwSPl6CJkFe06rRxRpgkF0u/view", "_blank");
        // window.location.href = Resume;
      }

    return(
        <Box 
        //   id='header-sec'
          id="home"
          display={'flex'} 
          alignItems={'center'}
          w={'100%'}
          margin={'auto'}  
          h={{base:"700px",sm: "700px", md: "700px", lg:"600px"}} 
         >
            <Circle position={'absolute'} bg='blue.100' opacity={'0.1'}
                h={{base:"150px",sm: "200px", md: "220px", lg:"250px"}} 
                w={{base:"150px",sm: "200px", md: "220px", lg:"250px"}}
                margin='2%'ml="5%"
                 alignSelf={'flex-start'}
                    display={{base:'none',sm: 'none',md:"none",lg:"block"}}
                    justifyItems={{base:'center',sm: 'center', md: 'flex-start', lg:'flex-start'}}
                  >
                </Circle>
                <Box 
                flexDirection={{base:"column",sm: "column", md: "column", lg:"row"}} 
                w={'100%'} display={'flex'} 
                justifyContent='space-evenly'
                alignItems={'center'}
                h={{base:"100%",sm: "100%", md: "100%", lg:"50%"}}
                >
                    <Box ml={{md:"5%"}}
                     h={{base:"150px",sm: "175px", md: "200px", lg:"220"}} w={{base:"150px",sm: "175px", md: "200px", lg:"220px"}} >
                    <Image className="home-img" _hover={{transform:"scale(1.05)",overflow:"hidden"}} src={profilePicCircular}
                      w={'40%'}
                      position={'relative'}
                      border={'3px solid purple'}
                      borderColor="#8860D0"
                      boxSize={'250px'}
                      h={{base:"100%",sm: "100%", md: "100%", lg:"100%"}} 
                      boxShadow={'lg'}
                      backgroundColor={'transparent'}
                      borderRadius='full'
                    />
                    </Box>
                    <Box animation={"moveright"} onAnimationEnd={"1s"} _hover={{transform:"scale(1.10)",overflow:"hidden"}} ml={{base:"1%",sm:"2%",md:"5%"}} w={{base:"350px",sm: "500px", md: "700px", lg:"777px"}} p={'5%'} color={'#8860D0'}  align='flex-end' textAlign={'start'}  h={'auto'} boxSizing={'border-box'}>
                        <Text  fontWeight={'semibold'} fontSize={{base:"1xl",sm: "2xl", md: "3xl", lg:"4xl"}} color={'skyblue'} >Hello,
                        👋
                        </Text>
                        <Text fontWeight={'semibold'} fontSize={{base:"1xl",sm: "2xl", md: "3xl", lg:"4xl"}} color={'#8860D0'} >Welcome to my portfolio !</Text>
                        <Text id="user-detail-name" fontWeight={'bold'} fontSize={{base:"3xl",sm: "4xl", md: "5xl", lg:"6xl"}} bgGradient={'linear(to-r,#8860D0,#5680E9,#5AB9EA)'} bgClip='text'>I'm Nikhil Magar</Text>
                        <Text fontWeight={'bold'} color={'#8860D0'} 
                         fontFamily={"Courier"}
                         fontSize={{base:"2xl",sm: "3xl", md: "3xl", lg:"4xl"}}>
                            <Typical id="user-detail-intro"
                                loop={Infinity}
                                steps={[
                                "Aspiring Full Stack Web Developer 🌐",
                                1500,
                                " MERN Stack Developer 💻",
                                1500,
                                "React-Redux Developer",
                                1500,
                                ]}
                            />
                        </Text>
                        <a id="resume-link-2"
                        onClick={downLoad_Resume_And_Open_In_New_Tab} 
                        href={Resume}
                        download><Button className="nav-link resume" bg="#8860D0" color={'#FFF'} _hover={{background:"#8860D0"}}>
                            Resume
                        </Button>
                        </a>
                    </Box>
                </Box>
        </Box>
    )
}