import { Box, Button, Grid, Heading, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import myntraProjectImg from "../Images/myntra_project_SS.jpg"
import relianceProjectImg from "../Images/reliance_project_SS.jpg"
import googleDigitalGarageProjectImg from "../Images/googleDigitalGarage_project_cc.jpg"


export const Projects=()=>{
    return(
        // <div style={{boxSizing:'border-box', height:'auto', padding:"5%", width:'100%', backgroundColor:"#0F292F", border:'1px solid red', color:'#ccc'}}>
     <Box id='projects-sec' boxSizing={'border-box'} h={{sm: "2250px", md: "1650px", lg:"900px"}} pb={'5%'} pt={'5%'} w='100%'  color={'grey'} p={'2%'}> 
    {/* //    <Box h={'auto'} pb={'5%'} boxSizing="border-box" id='projects-sec' bg="#0F292F" color={'#ccc'} border={'1px solid red'} justifyContent={'space-around'} p={'10%'} > */}
        <Heading  color={'purple.700'} mt={"55px"} mb={'55px'} fontSize={44} textDecoration={"underline"} >PROJECTS</Heading>
          {/* <Grid h={'1500px'} templateColumns='repeat(2, 1fr)' templateRows='auto' gap={"10%"}> */}
          <SimpleGrid columns={{sm: 1, md: 2, lg:3}} spacing='40px' textAlign={"left"}>
          <Box border={'3px solid grey'} borderRadius={'2%'} p={7}>
                <Image  src={myntraProjectImg}  border={'2px solid grey'}  mb={5} alt='GoogleGarageImage'></Image>
                <Heading mb={5} color={'purple.700'}>Myntra.com website Clone</Heading>
                <Text>• Description: Myntra is a major Indian fashion e-commerce company.</Text>
                <Text>• Features : Sign-up & Sign-in functionalities, Search functionality, Good
                        UI, Sorting & Filtering functionalities, Cart & Payment
                        gateway, Carousels , Home page , Navbar/ Footer
                </Text>
                <Text>• Teck Stack - HTML | CSS | JavaScript | Local Storage </Text>
                <Text>• A Group project build by me along with 3 team-members within 5 days during the construct week</Text>
                <HStack mt={5}  justifyContent={'center'}>
                    <Button color={'black'}  bg='purple.700'><a target="_blank" href="https://sumitraghavwork.github.io/mytro-di-myntra/">Live Demo</a></Button>
                    <Button color={'black'}  bg='purple.700'><a target="_blank" href="https://github.com/sumitraghavwork/mytro-di-myntra">Source Code</a></Button>
                </HStack>
            </Box>
            
            <Box border={'3px solid grey'} borderRadius={'2%'} p={7}>
                <Image border={'2px solid grey'} mb={5} src={relianceProjectImg} alt='GoogleGarageImage'></Image>
                <Heading mb={5} color={'purple.700'} >Reliance Digital website Clone</Heading>
                <Text>• Description: Reliance Digital is an Indian consumer electronics retailer.</Text>
                <Text>• Features : Authentication system (Registration & Login page), ES-6
                        Syntax, Import-export, Fetching API, Cart & payment
                        gateway, Carousel.
                </Text>
                <Text>• Teck Stack - JavaScript (ES-6 version) | HTML | CSS </Text>
                <Text>• A Group project build by me along with 3 team-members within 5 days during the construct week </Text>
                <HStack mt={5} justifyContent={'center'}>
                    <Button color={'black'}  bg='purple.700'><a target="_blank" href="https://effortless-parfait-1c264b.netlify.app/index.html">Live Demo</a></Button>
                    <Button color={'black'} bg='purple.700'><a target="_blank" href="https://github.com/shagun0061/celestial-bubble-1320">Source Code</a></Button>
                </HStack>
            </Box>
            
            <Box border={'3px solid grey'} borderRadius={'2%'} p={7}>
                <Image border={'2px solid grey'} mb={5} src={googleDigitalGarageProjectImg} alt='GoogleGarageImage'></Image>
                <Heading mb={5} color={'purple.700'}>Google Digital Garage website Clone</Heading>
                <Text>• Description: The Google Digital Garage is a online learning platform from Google.</Text>
                <Text>• Features :Single page web application, Reusable components,
                        Registration/Sign-in pages, Cart, React-Routing, Private
                        Route, Chakra UI, Context API
                </Text>
                <Text>• Teck Stack - React | JavaScript | HTML | CSS | Chakra UI </Text>
                <Text>• A individual project build by me within 5 days during the construct week </Text>
                <HStack mt={5} justifyContent={'center'}>
                    <Button color={'black'} bg='purple.700'><a target="_blank" href="https://googledigitalgaragebynikhilmagar.netlify.app/">Live Demo</a></Button>
                    <Button color={'black'} bg='purple.700'><a target="_blank" href="https://github.com/Nikras512/sweet-sea-507/tree/main/my-app">Source Code</a></Button>
                </HStack>
            </Box>
          </SimpleGrid>
          {/* <hr color="grey" style={{color:"grey",height:"2px"}} /> */}
       </Box>
    //    </div>
    )
}