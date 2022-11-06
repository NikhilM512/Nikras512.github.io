import { Box, Image, Text } from "@chakra-ui/react"
import { Navbar } from "../components/Navbar"


export const Aboutme=()=>{
    return(
        <div id="about">
       {/* <Navbar></Navbar> */}
       <Box  w={'100%'} h='500px' bg="#0F292F" position={'sticky'}  display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Text color={'#CB2D6F'} fontSize={33} textDecoration={"underline"} marginTop={'77px'} >About Me</Text>
           <Box w='70%' color='#ccc' fontSize={22} margin={'auto'} mt={'33px'}>
                <Text textAlign={'center'}>
                    Dedicated and passionate full stack web developer graduated from Masai
                    School capable to build user-friendly websites/ single page web applications
                    using a frameworks like ReactJS as well as wide range of front-end skills like Redux, JavaScript, HTML, CSS,
                    & back-end skills like MongoDB, Node.js & Express.js. Looking to
                    further enhance coding skills as a full stack developer.
                </Text>
                <Box w='20%' h='50px' display='flex' margin={'auto'} mt='22px'  justifyContent={'space-evenly'}>
                    <a href="https://github.com/Nikras512"><Image h='100%' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github'></Image></a>
                    <a href="https://www.linkedin.com/in/nikhil-512-401131168/"><Image h='100%' src='https://abovethelaw.com/uploads/2016/01/linkedin-logo.png' alt='LinkedIn'></Image></a>
                    <a href="mailto:nikhilmagar1995@gmail.com"><Image h='100%' src='https://www.freeiconspng.com/thumbs/email-icon/email-icon--clipart-best-22.png' alt='e-Mail'></Image></a>
                </Box>
           </Box>
       </Box>
       </div>
    )
}