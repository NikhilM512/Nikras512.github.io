import { Box, Heading } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from 'react-tooltip';
import { Stats } from "./Stats";

export const Calendar=(props)=>{

    const {username:GitHubUsername} = props;
    console.log(GitHubUsername,"hhh")

    const selectLastHalfYear = contributions => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 6;
    
      return contributions.filter(day => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();
    
        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      });
    };

    return(
        <Box w="100%"  
        color={'#ccc'}   
        h="auto"
        p={'5%'} 
        boxSizing="border-box" 
        margin={"auto"} >
         <Heading mb={7} textDecoration={"underline"}  pb={'5%'}  color={'#8860D0'} fontSize={44}>GITHUB STATISTICS</Heading>
         
         <GitHubCalendar
         className="react-activity-calendar"
         style={{margin:"auto",marginBottom:"5%"}}
         username={GitHubUsername}
         blockSize={20}
        color="purple"
         mb={'5%'}
         >

         <ReactTooltip delayShow={20}></ReactTooltip>

         </GitHubCalendar>
         <Stats/>
    </Box>
    )
       
}