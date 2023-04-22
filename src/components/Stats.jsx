
import { Box, Image } from "@chakra-ui/react"

export const Stats=()=>{

     return (
        <div style={{width:"60%",margin:"auto",height:"auto"}}>                
                <Box _hover={{transform:"scale(1.05)",overflow:"hidden"}}
                h="auto"
                margin="auto"
                w="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                id="github-streak-stats"
                >
                <a 
                 id="github-streak-stats"
                style={{
                   display:"flex",
                   alignItems:"center",
                   justifyContent:"center",
                   height:"auto",
                   width:"100%"
                }}
                 href="https://github.com/Nikras512">
                    <Image id="github-streak-stats"
                    src="https://github-readme-streak-stats.herokuapp.com?user=Nikras512&theme=shades-of-purple&fire=orangered&ring=orange&currStreakNum=8860D0&sideNums=8860D0&sideLabels=8860D0&bg_color=8860D0"
                    // src="https://streak-stats.demolab.com/?user=Nikras512&theme=shades-of-purple&fire=orangered&ring=orange&currStreakNum=8860D0&sideNums=8860D0&sideLabels=8860D0" 
                    alt="Stat-1"
                    width="100%"
                    align="center"
                    h="auto"
                    >
                    </Image>
                </a>
                </Box>
                    <Box
                    _hover={{transform:"scale(1.05)",overflow:"hidden"}}
                        w="100%"
                        h="auto"
                        display="flex"
                        flexDirection="column"
                        justifyContent="start"
                        alignItems="center"
                        margin="auto"
                        mb="55px"
                    >
                        <a 
                        id="github-stats-card"
                        style={{height:"100%",
                        margin:"auto",
                        marginTop:"3%",
                       }}
                         href="https://github.com/Nikras512"
                        >
                        <img id="github-stats-card"
                        src="https://github-readme-stats.vercel.app/api?username=Nikras512&theme=shades-of-purple"
                        // src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/?username=nikras512&show_icons=true&theme=shades-of-purple&ring=orange&title=purple" 
                        alt="Stat-2" />
                        </a>
                        <a 
                         id="github-top-langs"
                         style={{width:"60%",
                         margin:"auto",
                        }}
                        >
                        <img 
                        style={{    
                        width:"100%",
                        marginTop:"3%"
                    }} 
                    id="github-top-langs"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nikras512&theme=shades-of-purple"
                    // https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=nikras512
                        // src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=nikras512&theme=shades-of-purple" 
                        alt="Stat-3" />
                        </a>
                    </Box>
        </div>
     )
}