import { Box, Heading, Image, Text } from "@chakra-ui/react"
import {FaGithub} from "react-icons/fa";
import {ImMail4} from "react-icons/im";
import {BsLinkedin} from "react-icons/bs";
import style from "./Icons.module.css";

export const Contact=()=>{
    return(
       <Box 
    //    id='contact-sec' 
        id="contact"
       mb="1vh" h={'auto'} pb={'1%'} pt={'0.5%'} w='100%' color={'#ccc'}>
        <Heading mb="2%" textDecoration={"underline"} color={'#8860D0'} fontSize={44}>
            CONTACT ME
        </Heading>
        <Box w="100%" display="flex" flexDirection={["column","column","column","column"]} justifyContent="space-around" >
       
        <Box w={["100%","100%","100%","100%"]} display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
        <Box >
        <span><Text id="contact-phone" display="inline" mt="3%" color='grey' fontSize={[16,18,20,25]}>📞 Contact No  : +91-9421167202</Text></span>
        </Box>
        <Text id="contact-email" mt="3%" color='grey' fontSize={[16,18,20,25]}  >📧 Email Id   :  nikhilmagar1995@gmail.com</Text>
        <Text mt="3%" color='grey' fontSize={[16,18,20,25]}  >🏠 Address  : Sangli (Maharashtra)</Text>
        <Box mt="3%" w={{base:"55%",sm: "44%", md: "33%", lg:"22%"}} h={{base:"30px",sm: "30px", md: "40px", lg:"50px"}} display='flex' justifyContent={'space-evenly'}>
            <a id="contact-github" href="https://github.com/NikhilM512" target="_blank">
                <FaGithub id={style.GithubIcon} _hover={{transform:"scale(1.25)",overflow:"hidden"}} style={{height:"100%",width:"100%",color:"#8860D0"}}></FaGithub> 
            </a>
            <a id="contact-linkedin" href="https://www.linkedin.com/in/nikhil-512-401131168/" target="_blank">
                <BsLinkedin id={style.LinkedInIcon} _hover={{transform:"scale(1.25)",overflow:"hidden"}} style={{height:"100%",width:"100%",color:"#8860D0"}}></BsLinkedin>
            </a>
            <a id="contact-email" href="mailto:nikhilmagar1995@gmail.com" target="_blank">
                <ImMail4 id={style.mailIcon} style={{height:"100%",width:"100%",color:"#8860D0"}}></ImMail4> 
            </a>
        </Box>
        </Box >
        <Image  borderRadius="20px" margin={{base:"auto",sm:"auto",md:"auto",lg:"auto"}} mt={{base:"7%",sm:"7%",md:"7%",lg:"7%"}} w={["95%","95%","95%","50%"]} h={["44vh","55vh","66vh","77vh"]} src="https://gr7800.github.io/static/media/bg1.d4a402f4b5da5590c675.gif"></Image>
        </Box >
        <Text w="80%" m="auto" mt="1%" textAlign='center' fontSize="18px" fontFamily="monospace" color="#8860D0" fontWeight="semibold"> Designed & Developed by Nikhil Magar © 2022</Text>
       </Box>
    )
}