// import { Heading } from "@chakra-ui/react"


export const Stats=()=>{

     return (
        <div style={{marginTop:"5%",width:"60%",margin:"auto"}}>
                   
            <div
                style={
                    {
                        width:"100%",
                        marginBottom:"5%",
                        margin:"auto",
                        // border:"1px solid green",
                    }
                }>
                <a 
                 href="https://github.com/Nikras512">
                    <img 
                    style={{width:"100%",marginTop:"5%"}}
                    align='left'
                    src="https://github-readme-streak-stats.herokuapp.com?user=Nikras512&theme=shades-of-purple&fire=DD0F09&ring=CB2D6F&currStreakNum=CB2D6F&sideNums=CB2D6F&sideLabels=C94FDD" 
                    alt="Stat-1" />
                </a>
            </div>
            <div
                style={
                    {
                        width:"100%",
                        height:"100px",
                        display:"flex",
                        // flexDirection:"row",
                        // justifyContent:"space-evenly",
                        marginBottom:"55px",
                        margin:"auto",
                        // border:"1px solid red"
                    }
                }>
                    {/* <div style={{width:"100%",height:"100%",border:"1px solid red"}}> */}
                        <a 
                        style={{height:"100%"}} href="https://github.com/Nikras512"
                        >
                        <img 
                        // style={{height:"100%",width:"60%",border:"1px solid orange"}}
                        // style={{border:"1px solid orange"}}
                        align='center'
                        src="https://github-readme-stats.vercel.app/api?username=Nikras512&show_icons=true&theme=radical" 
                        alt="Stat-2" />
                        </a>
                    {/* </div> */}
                
                    {/* <div style={{width:"50%",height:"100%",border:"1px solid red"}}> */}
                        <a 
                         style={{height:"100%"}}
                        // style={{height:"100%",width:"40%",border:"1px solid red"}} href="https://github.com/Nikras512"
                        >
                        <img 
                        // style={{border:"1px solid orange"}}
                        align='left'
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nikras512&theme=radical" 
                        alt="Stat-3" />
                        </a>
                    {/* </div> */}
                
            </div>
        </div>
     )
}