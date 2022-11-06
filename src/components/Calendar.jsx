import { Box, Heading } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from 'react-tooltip';
import { Stats } from "./Stats";

export const Calendar=(props)=>{

    const {username:GitHubUsername} = props;

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 8;
      
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
        <Box color={'#ccc'} h={{sm: "600px", md: "900px", lg:"1000px"}} p={'5%'} w='100%' >
         <Heading textDecoration={"underline"}  pb={'5%'}  color={'purple.700'} fontSize={44}>GITHUB STATS</Heading>
         <GitHubCalendar
        //  w={{sm: "700px", md: "900px", lg:"1200px"}}
        //  border={'1px solid red'}
         style={{margin:"auto"}}
         username={GitHubUsername}
         transformData={selectLastHalfYear}
         blockSize={20}
         fontSize={20} 
         color={'purple'}
         mb={'5%'}
         >
         <ReactTooltip delayShow={20}></ReactTooltip>
         </GitHubCalendar>
         <Stats/>
    </Box>
    )
       
}