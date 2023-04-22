import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import reactImg from "../Images/React3.png"
import reduxImg from "../Images/rdx2.png"
import jsImg from "../Images/JS3.svg"
import htmlImg from "../Images/HTML.png"
import cssImg from "../Images/CSS1.png"
import NodeJS from "../Images/Node3.png"
import mongoDbImg from "../Images/mongoDB2.png"
import tsImg from "../Images/TS.png"
import ExpJS from "../Images/ExpJS2.png"
import Chakra from "../Images/Chakra.jpg"
import DSA from "../Images/DSA.png"
import ES6 from "../Images/ES6.png"


export const Skills=()=>{
    return(
       <Box mb="25px" mt={7} 
       id="skills"
    //    id='skills-sec' 
       boxSizing="border-box"
        pb={{base:"30%",sm: "22%", md: "15%", lg:"7%"}} pt={'5%'} 
        w='100%' >
        <Heading mb={7} mt={7} textDecoration={"underline"} color={'#8860D0'} fontSize={44}>SKILLS</Heading>
        <SimpleGrid w='77%' columns={{base:2,sm: 2, md: 3, lg:4}}  margin={'auto'} justifyItems={'center'}  spacing={{base:'5%',sm:"5%",md:"5%",lg:"12%"}} 
        p={"5%"} 
        >
            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={reactImg}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">React JS</Text>
            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={reduxImg}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Redux</Text>
            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={jsImg}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">JavaScript</Text>
            </Box>
            
            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={htmlImg}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">HTML</Text>
            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={cssImg}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">CSS</Text>
            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={mongoDbImg}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">MongoDB</Text>
            </Box>

            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={NodeJS}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Node JS</Text>
            </Box>
            
            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={ExpJS}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Express JS</Text>
            </Box>
            
            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={DSA}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">DSA</Text>
            </Box>
            
            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={Chakra}></Image> 
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">Chakra UI</Text>
            </Box>
            
            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={ES6}></Image>
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">ES6</Text>
            </Box>
            
            <Box className="skills-card">
            <Image className="skills-card-img" _hover={{transform:"scale(1.15)",overflow:"hidden",backgroundColor:"rgb(136, 96, 208,0.7)",borderRadius:"25%"}} border={'5px solid'} borderColor="#8860D0" w={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} h={{base:"75px",sm: "100px", md: "125px", lg:"150px"}} bg="rgb(136, 96, 208,0.3)" p="5%" borderRadius="15%" src={tsImg}></Image>  
            <Text className="skills-card-name" color="#8860D0" fontSize={20} fontWeight="500" mt="7%">TypeScript</Text>
            </Box>
        </SimpleGrid>
       </Box>
    )
}