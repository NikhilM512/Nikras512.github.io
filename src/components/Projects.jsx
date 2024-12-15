import { Box, Button, Heading, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import myntraProjectImg from "../Images/MyntraBanner.png"
import relianceProjectImg from "../Images/reliance_project_SS.jpg"
import googleDigitalGarageProjectImg from "../Images/googleDigitalGarage_project_cc.jpg"
import liciousImg from "../Images/LiciousBanner.png"
import kfcImg from "../Images/KFCBanner1.png"
import p10 from "../Images/kfc00.png";
import p11 from "../Images/kfc01.png";
import p12 from "../Images/kfc02.png";
import p13 from "../Images/kfc03.png";
import p14 from "../Images/kfc04.png";
import p15 from "../Images/kfc05.png";
import p16 from "../Images/kfc06.png";
import p17 from "../Images/kfc07.png";
import p20 from "../Images/myntra00.png";
import p21 from "../Images/myntra01.png";
import p22 from "../Images/myntra02.png";
import p23 from "../Images/myntra03.png";
import p24 from "../Images/myntra04.png";
import p25 from "../Images/myntra05.png";
import p26 from "../Images/myntra06.png";
import p27 from "../Images/myntra07.png";
import p30 from "../Images/Google00.png";
import p31 from "../Images/Google01.png";
import p32 from "../Images/Google02.png";
import p33 from "../Images/Google03.png";
import p34 from "../Images/Google04.png";
import p40 from "../Images/reliance00.png";
import p41 from "../Images/reliance01.png";
import p42 from "../Images/reliance02.png";
import p43 from "../Images/reliance03.png";
import p44 from "../Images/reliance04.png";
import p45 from "../Images/reliance05.png";
import p46 from "../Images/reliance06.png";
import p47 from "../Images/reliance07.png";
import p50 from "../Images/Licious00.png";
import p51 from "../Images/Licious01.png";
import p52 from "../Images/Licious02.png";
import p53 from "../Images/Licious03.png";
import p54 from "../Images/Licious04.png";
import p55 from "../Images/Licious05.png";
import p56 from "../Images/Licious06.png";
import {FaLink} from "react-icons/fa";
import {FaGithub} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import { useState } from "react"
import { useEffect } from "react"

export const Projects=()=>{

    let p1Imgs=[p10,p11,p12,p13,p14,p15,p16,p17];
    let p2Imgs=[p20,p21,p22,p23,p24,p25,p26,p27];
    let p3Imgs=[p30,p31,p32,p33,p34];
    let p4Imgs=[p40,p41,p42,p43,p44,p45,p46,p47];
    let p5Imgs=[p50,p51,p52,p53,p54,p55,p56];

    const [p1,setP1]=useState(p10)
    const [p2,setP2]=useState(p20)
    const [p3,setP3]=useState(p30)
    const [p4,setP4]=useState(p40)
    const [p5,setP5]=useState(p50)

    let id1;
    let id2;
    let id3;
    let id4;
    let id5;

    const Project_1_slideshow=()=>{
        let i=0;
       id1=setInterval(()=>{
        setP1(p1Imgs[i])
        console.log(i)
        i++
        if(i>=p1Imgs.length){
            i=0;
        }
       },2000)
    }
    
    const Project_2_slideshow=()=>{
        let i=0;
       id2=setInterval(()=>{
        setP2(p2Imgs[i])
        console.log(i)
        i++
        if(i>=p2Imgs.length){
            i=0;
        }
       },2000)
    }

    const Project_3_slideshow=()=>{
        let i=0;
       id3=setInterval(()=>{
        setP3(p3Imgs[i])
        console.log(i)
        i++
        if(i>=p3Imgs.length){
            i=0;
        }
       },2000)
    }

    const Project_4_slideshow=()=>{
        let i=0;
       id4=setInterval(()=>{
        setP4(p4Imgs[i])
        console.log(i)
        i++
        if(i>=p4Imgs.length){
            i=0;
        }
       },2000)
    }

    const Project_5_slideshow=()=>{
        let i=0;
       id5=setInterval(()=>{
        setP5(p5Imgs[i])
        console.log(i)
        i++
        if(i>=p5Imgs.length){
            i=0;
        }
       },2000)
    }

    useEffect(()=>{
        Project_1_slideshow()
        Project_2_slideshow()
        Project_3_slideshow()
        Project_4_slideshow()
        Project_5_slideshow()
    },[])
   

    // id=setInterval(slideshow,3000)

    


    return(
     <Box 
    //  id='projects-sec' 
    id="projects"
     boxSizing={'border-box'} 
     h="auto" 
     pb={'5%'} pt={'5%'} w='100%'  color={'grey'} p={'2%'}> 
        <Heading color={'#8860D0'} mt={"55px"} mb={'55px'} fontSize={44} textDecoration={"underline"} >PROJECTS</Heading>
          <SimpleGrid  p="2%" columns={{sm: 1, md: 2, lg:1}} spacing='40px' textAlign={"left"}>
          
          <Box className="project-card" bg="rgb(136, 96, 208,0.2)" w={{lg:"88%"}} margin={{lg:"auto"}} display="flex" flexDirection={["column","column","column","row"]} _hover={{transform:"scale(1.05)",overflow:"hidden"}} border={'5px solid'} borderColor="#8860D0" borderRadius={{base:'0px 60px 0px 60px',sm:'0px 60px 0px 60px',md:'0px 60px 0px 60px',lg:'0px 90px 0px 90px'}} p={{base:7,sm:7,md:7,lg:"5%"}} >
                <Image _hover={{transform:"scale(1.05)"}} w={{lg:"50%"}} mr={{lg:"5%"}} src={p1}  border={'2px solid grey'}  alt='KFC_Clone_HomePage_Image' ></Image>
                 <Box textAlign="justify"  color={'grey'} >
                 <Heading className="project-title" mb={5} mt={[7,7,7,0]} color={'#8860D0'} >KFC Clone</Heading>
                  
                    <Text className="project-tech-stack" fontWeight="bold" >• <span style={{color:"#8860D0",fontWeight:"bold", textDecoration: 'Underline'}}>TECH STACK</span> React | JavaScript | Redux | MongoDB | Node.js | Express.js | Chakra UI | HTML | CSS. </Text>
                    <Text className="project-description">• Description: KFC is an American fast-food restaurant chain, that specializes in fried chicken.</Text>
                    <Text>• Features : Full-stack web application (Frontend + Backend),
                            Admin Page, Authentication system , Home Page,
                            Menu Page, Cart & Payment gateway, Private Route, Responsive Pages, Good UI.
                    </Text>
                    <Text>• A collaborative project build & Integrated by 4 team members in 4 days.</Text>
                    <HStack mt={5}  justifyContent={'center'}>   
                    <a className="project-github-link" target="_blank" href="https://github.com/Nikras512/dramatic-road-5348">
                        <Button _hover={{transform:"scale(1.05)",overflow:"hidden"}} color={'black'}  bg='#8860D0'>
                            <FaGithub style={{display:"inline",marginRight:"5%",width:"18%",height:"100%"}}></FaGithub>
                            Source Code
                            </Button>
                            </a>
                    <a className="project-deployed-link" target="_blank" href="https://creative-marzipan-38c236.netlify.app/">
                        <Button _hover={{transform:"scale(1.05)",overflow:"hidden"}} display="flex" alignItems="center" color={'black'}  bg='#8860D0'>
                            <FaLink style={{display:"inline",marginRight:"5%",width:"15%",height:"100%"}}></FaLink>
                            <p>Deployed Link</p>
                        </Button>
                    </a>
                    </HStack>
                 </Box>
            </Box>

          <Box className="project-card" bg="rgb(136, 96, 208,0.2)" w={{lg:"88%"}} margin={{lg:"auto"}} display="flex" flexDirection={["column","column","column","row-reverse"]} _hover={{transform:"scale(1.05)",overflow:"hidden"}} border={'5px solid'} borderColor="#8860D0" borderRadius={{base:'0px 60px 0px 60px',sm:'0px 60px 0px 60px',md:'0px 60px 0px 60px',lg:'0px 90px 0px 90px'}} p={{base:7,sm:7,md:7,lg:"5%"}} mt={{lg:"5%"}}>
                <Image _hover={{transform:"scale(1.05)"}} w={{lg:"50%"}} mr={{lg:"3%"}} ml={{lg:"5%"}} src={p2}  border={'2px solid grey'}  alt='Mytro_Di_Myntra-Homepage-Image' ></Image>
                 <Box textAlign="justify"  color={'grey'}>
                    <Heading className="project-title" mt={[7,7,7,0]} mb={5} color={'#8860D0'}>Myntra.com Clone</Heading>
                    <Text className="project-tech-stack" fontWeight="bold" >• <span style={{color:"#8860D0",fontWeight:"bold", textDecoration: 'Underline'}}>TECH STACK</span> - HTML | CSS | JavaScript | Local Storage </Text>
                    <Text className="project-description">• Description: Myntra is a India's largest e-commerce store for fashion and lifestyle products.</Text>
                    <Text>• Features : Sign-up & Sign-in functionalities, Search functionality, Good
                            UI, Sorting & Filtering functionalities, Cart & Payment
                            gateway, Carousels , Home page , Navbar/ Footer
                    </Text>
                    <Text>• A Group project build by me along with 3 team-members within 4 days.</Text>
                    <HStack mt={5}  justifyContent={'center'} alignItems="center">
                    <a className="project-github-link" target="_blank" href="https://github.com/sumitraghavwork/mytro-di-myntra">
                        <Button _hover={{transform:"scale(1.05)",overflow:"hidden"}} color={'black'}  bg='#8860D0'>
                        <FaGithub style={{display:"inline",marginRight:"5%",width:"18%",height:"100%"}}></FaGithub>
                            Source Code
                        </Button>
                    </a>
                    <a className="project-deployed-link" target="_blank" href="https://sumitraghavwork.github.io/mytro-di-myntra/">
                        <Button _hover={{transform:"scale(1.05)",overflow:"hidden"}} color={'black'}  bg='#8860D0'>
                        <FaLink style={{display:"inline",marginRight:"5%",width:"15%",height:"100%"}}></FaLink> 
                            Deployed Link
                        </Button>
                    </a>
                    </HStack>
                 </Box>
            </Box>

            <Box className="project-card" bg="rgb(136, 96, 208,0.2)" w={{lg:"88%"}} margin={{lg:"auto"}} display="flex" flexDirection={["column","column","column","row"]} _hover={{transform:"scale(1.05)",overflow:"hidden"}} border={'5px solid'} borderColor="#8860D0" borderRadius={{base:'0px 60px 0px 60px',sm:'0px 60px 0px 60px',md:'0px 60px 0px 60px',lg:'0px 90px 0px 90px'}} p={{base:7,sm:7,md:7,lg:"5%"}} mt={{lg:"5%"}}>
                <Image _hover={{transform:"scale(1.05)"}} w={{lg:"50%"}} mr={{lg:"5%"}} border={'2px solid grey'} src={p3} alt='GoogleGarageImage'></Image>
                 <Box textAlign="justify"  color={'grey'}>
                    <Heading className="project-title" mt={[7,7,7,0]} mb={5} color={'#8860D0'}>Google Digital Garage Clone</Heading>
                    <Text className="project-tech-stack" fontWeight="bold" >• <span style={{color:"#8860D0",fontWeight:"bold", textDecoration: 'Underline'}}>TECH STACK</span> - React | JavaScript | HTML | CSS | Chakra UI </Text>
                    <Text className="project-description">• Description: The Google Digital Garage is a online learning platform from Google.</Text>
                    <Text>• Features :Single page web application, Reusable components,
                            Registration/Sign-in pages, Cart, React-Routing, Private
                            Route, Chakra UI, Context API
                    </Text>
                    <Text>• A individual project build, developed & integrated by me within 4 days during the construct week.</Text>         
                    <HStack mt={5} justifyContent={'center'}>
                        <a className="project-github-link" target="_blank" href="https://github.com/Nikras512/sweet-sea-507">
                            <Button _hover={{transform:"scale(1.05)",overflow:"hidden"}} color={'black'} bg='#8860D0'>
                                <FaGithub style={{display:"inline",marginRight:"5%",width:"18%",height:"100%"}}></FaGithub> 
                                    Source Code
                            </Button>
                        </a>
                        <a className="project-deployed-link" target="_blank" href="https://googledigitalgaragebynikhilmagar.netlify.app/">
                            <Button _hover={{transform:"scale(1.05)",overflow:"hidden"}} color={'black'} bg='#8860D0'>
                                <FaLink style={{display:"inline",marginRight:"5%",width:"15%",height:"100%"}}></FaLink>
                                    Deployed Link
                            </Button>
                        </a>
                    </HStack>
                 </Box>
            </Box>

            <Box className="project-card" bg="rgb(136, 96, 208,0.2)" w={{lg:"88%"}} margin={{lg:"auto"}} display="flex" flexDirection={["column","column","column","row-reverse"]} _hover={{transform:"scale(1.05)",overflow:"hidden"}} border={'5px solid'} borderColor="#8860D0" borderRadius={{base:'0px 60px 0px 60px',sm:'0px 60px 0px 60px',md:'0px 60px 0px 60px',lg:'0px 90px 0px 90px'}} p={{base:7,sm:7,md:7,lg:"5%"}} mt={{lg:"5%"}}>
                <Image _hover={{transform:"scale(1.05)"}} w={{lg:"50%"}} ml={{lg:"5%"}} mr={{lg:"3%"}} border={'2px solid grey'} src={p4} alt='relianceProjectImg'></Image>
                <Box textAlign="justify"  color={'grey'}>
                    <Heading className="project-title" mt={[7,7,7,0]} mb={5} color={'#8860D0'} >Reliance Digital Clone</Heading>
                    <Text className="project-tech-stack" fontWeight="bold">• <span style={{color:"#8860D0",fontWeight:"bold", textDecoration: 'Underline'}}>TECH STACK</span> - JavaScript (ES-6 version) | HTML | CSS </Text>
                    <Text className="project-description">• Description: Reliance Digital is an Indian consumer electronics retailer &  wholly owned subsidiary of Reliance Industries.</Text>
                    <Text>• Features : Authentication system (Registration & Login page), ES-6
                            Syntax, Import-export, Fetching API, HomePage, Product Pages, Cart & payment Pages,
                            gateway, Carousel.
                    </Text>
                    <Text>• A Group project build by me along with 4 team-members within 4 days during the construct week. </Text>
                    <HStack mt={5} justifyContent={'center'}>
                    <a className="project-github-link" target="_blank" href="https://github.com/shagun0061/celestial-bubble-1320">
                        <Button _hover={{transform:"scale(1.05)",overflow:"hidden"}} color={'black'} bg='#8860D0'>                     
                            <FaGithub style={{display:"inline",marginRight:"5%",width:"18%",height:"100%"}}></FaGithub> 
                            Source Code                          
                        </Button>
                    </a>
                    <a className="project-deployed-link" target="_blank" href="https://effortless-parfait-1c264b.netlify.app/index.html">
                        <Button _hover={{transform:"scale(1.05)",overflow:"hidden"}} color={'black'}  bg='#8860D0'>
                            <FaLink style={{display:"inline",marginRight:"5%",width:"15%",height:"100%"}}></FaLink>                  
                                Deployed Link
                        </Button>
                    </a>
                    </HStack>
                </Box>
            </Box>

            <Box className="project-card" bg="rgb(136, 96, 208,0.2)" w={{lg:"88%"}} margin={{lg:"auto"}} display="flex" flexDirection={["column","column","column","row"]} _hover={{transform:"scale(1.05)",overflow:"hidden"}} border={'5px solid'} borderColor="#8860D0" borderRadius={{base:'0px 60px 0px 60px',sm:'0px 60px 0px 60px',md:'0px 60px 0px 60px',lg:'0px 90px 0px 90px'}} p={{base:7,sm:7,md:7,lg:"5%"}} mt={{lg:"5%"}}>
                <Image _hover={{transform:"scale(1.05)"}} w={{lg:"50%"}} mr={{lg:"5%"}}  src={p5}  border={'2px solid grey'}  alt='liciousImg' ></Image>
                 <Box textAlign="justify"  color={'grey'}>
                    <Heading className="project-title" mt={[7,7,7,0]} mb={5} color={'#8860D0'}>Licious Clone</Heading>
                    <Text fontWeight="bold" class="project-tech-stack">• <span style={{color:"#8860D0",fontWeight:"bold", textDecoration: 'Underline'}}>TECH STACK</span> : React | JavaScript | Redux | Chakra UI | HTML | CSS | JSON Server </Text>
                    <Text className="project-description">• Description: icious is an online meat and seafood orders firm with a complete business model.</Text>
                    <Text>• Features : Authentication system, Home Page, Product Page, Sorting & filtering functionalities,
                            Cart Page, Payment gateway Pages, Redux Store, React Hooks, Carousels, Good UI.
                    </Text>
                    <Text>• A collaborative project created & developed by 4 team members in 4 days.</Text>
                    <HStack mt={5} justifyContent={'center'}>   
                    <a className="project-github-link" target="_blank" href="https://github.com/prabhash1475/delicious">
                        <Button _hover={{transform:"scale(1.05)",overflow:"hidden"}} color={'black'}  bg='#8860D0'>
                            <FaGithub style={{display:"inline",marginRight:"5%",width:"18%",height:"100%"}}></FaGithub>
                            Source Code
                        </Button>
                    </a>  
                    <a className="project-deployed-link" target="_blank" href="https://deliciousbanglore.netlify.app/">
                        <Button _hover={{transform:"scale(1.05)",overflow:"hidden"}} display="flex" alignItems="center" color={'black'} bg='#8860D0'>
                            <FaLink style={{display:"inline",marginRight:"5%",width:"15%",height:"100%"}}></FaLink>
                            <p>Deployed Link</p>
                        </Button>
                    </a>              
                    </HStack>
                 </Box>
            </Box>
            
          </SimpleGrid>
       </Box>
    )
}