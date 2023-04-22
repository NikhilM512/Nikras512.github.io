import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react"
import GitHub from "../Images/GitHub.png"
import Netlify from "../Images/Netlify.png"
import Npm from "../Images/Npm.png"
import cyclic from "../Images/Cyclic.jpg"
import versel from "../Images/versel.jpg"
import VS from "../Images/VSCode.jpg"
import postman from "../Images/Postman.jpg"
import codesanbox from "../Images/CodeSandBox.png"
import JSON from "../Images/JSON.jpg"
import Axios from "../Images/Axios.png"
import Replit from "../Images/Replit.png"
import Render from "../Images/Render2.jpg"
// import Style from "./Tools.module.css"

export const Tools=()=>{
    return(
       <Box mb="25px" mt={7} 
       boxSizing="border-box"
        pb={{base:"30%",sm: "22%", md: "15%", lg:"7%"}} pt={'5%'} 
        w='100%' >
        <Heading mb={7} mt={7} textDecoration={"underline"} color={'#8860D0'} fontSize={44}>TOOLS</Heading>
        <SimpleGrid w='77%' columns={{base:2,sm: 2, md: 3, lg:4}}  margin={'auto'} justifyItems={'center'}  spacing={{base:'5%',sm:"5%",md:"5%",lg:"12%"}} 
        p={"5%"} 
        >
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={VS}></Image>
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={GitHub}></Image>
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Netlify}></Image>
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={JSON}></Image>  
            
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Npm}></Image>
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Replit}></Image>
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={codesanbox}></Image> 
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Axios}></Image>

            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={cyclic}></Image>
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Render}></Image>
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={versel}></Image>
            <Image _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={postman}></Image>
        </SimpleGrid>
       </Box>
    )
}