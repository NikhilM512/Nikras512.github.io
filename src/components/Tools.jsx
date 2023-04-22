import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
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
    //    border="2px solid"
        pb={{base:"50%",sm: "33%", md: "20%", lg:"7%"}} pt={'5%'} 
        w='100%' >
        <Heading mb={7} mt={7} textDecoration={"underline"} color={'#8860D0'} fontSize={44}>TOOLS</Heading>
        <SimpleGrid w='77%' columns={{base:2,sm: 2, md: 3, lg:4}}  margin={'auto'} justifyItems={'center'}  spacing={{base:'5%',sm:"5%",md:"5%",lg:"12%"}} 
        p={"5%"} 
        >
            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={VS}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">VS Code</Text>

            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={GitHub}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">GitHub</Text>

            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Netlify}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Netlify</Text>

            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={JSON}></Image>  
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">JSON Server</Text>

            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Npm}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Npm</Text>

            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Replit}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Replit</Text>

            </Box>

            <Box className="skills-card" >
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={codesanbox}></Image> 
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">CodeSandbox</Text>

            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Axios}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Axios</Text>

            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={cyclic}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Cyclic</Text>

            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Render}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Render</Text>

            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={versel}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Vercel</Text>

            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" display='block' m="auto" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={postman}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Postman</Text>

            </Box>

        </SimpleGrid>
       </Box>
    )
}