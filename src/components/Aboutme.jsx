import { Box, Heading, Text } from "@chakra-ui/react";
import {FaGithub} from "react-icons/fa"
import {ImMail4} from "react-icons/im"
import {BsLinkedin} from "react-icons/bs"
import style from "./Icons.module.css"


export const Aboutme=()=>{
    return(
       <Box
      //  id='aboutme-sec' 
      id="about" className="about section"
       pt={{base:"22px",sm:"33px",md:'99px',lg:"99px"}} 
       pb={'55px'} 
       w={'100%'} 
      h="auto"
       display={{sm: "flex", md: "flex", lg:"flex"}} 
       flexDirection={{sm: "column", md: "column", lg:"column"}} 
       justifyItems={{sm: "center", md: "center", lg:"center"}}>
        <Heading  color={'#8860D0'} fontSize={44}  textDecoration={"underline"} >About Me</Heading>
           <Box w='70%' color='grey' fontSize={22} margin={'auto'} mt={'33px'}>
                <Text id="user-detail-intro" textAlign={{base:'justify',sm:'justify',md:"justify",lg:"center"}} fontSize={{base:"14px",sm: "16xl", md: "18xl", lg:"22px"}}>
                        Aspiring and passionate full-stack web developer who
                        graduated from Masai School. Capable of building user-friendly
                        websites/single-page web applications using a wide range of
                        front-end skills like HTML, CSS, JavaScript, React, and Redux &
                        back-end skills like MongoDB, Node.js & Express.js. Looking
                        forward to working in a service-based organization.
                </Text>
                <Box w={{base:"50%",sm: "44%", md: "33%", lg:"25%"}} h={{base:"30px",sm: "30px", md: "40px", lg:"50px"}} display='flex' margin={'auto'} mt='22px'  justifyContent={'space-evenly'}>
                     <a id="contact-github" href="https://github.com/Nikras512" target="_blank">
                        <FaGithub id={style.GithubIcon} _hover={{transform:"scale(1.25)",overflow:"hidden"}} style={{height:"100%",width:"100%",color:"#8860D0"}}></FaGithub> 
                     </a>
                     <a id="contact-linkedin" href="https://www.linkedin.com/in/nikhil-512-401131168/" target="_blank">
                        <BsLinkedin id={style.LinkedInIcon} _hover={{transform:"scale(1.25)",overflow:"hidden"}} style={{height:"100%",width:"100%",color:"#8860D0"}}></BsLinkedin>
                     </a>
                     <a id="contact-email" href="mailto:nikhilmagar1995@gmail.com" target="_blank">
                        <ImMail4 id={style.mailIcon} style={{height:"100%",width:"100%",color:"#8860D0"}}></ImMail4> 
                     </a>
                </Box>
           </Box>
       </Box>
    )
}