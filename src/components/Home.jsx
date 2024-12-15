import { Box } from "@chakra-ui/react"
import { Navbar } from "../components/Navbar"
import { Aboutme } from "./Aboutme"
import { Calendar } from "./Calendar"
import { Contact } from "./Contact"
import { Header } from "./Header"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import { Tools } from "./Tools"


export const Home=()=>{
    return(
        <Box w='100%'>
            <Navbar/>
            <Header/>
            <Aboutme/>
            <Projects/>
            <Skills/>
            <Tools/>
            <Calendar username="NikhilM512"/>
            <Contact/>
        </Box>    
    
      )
    }
