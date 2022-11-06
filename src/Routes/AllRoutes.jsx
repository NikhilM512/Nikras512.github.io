import { Route, Routes } from "react-router-dom"
import { Aboutme } from "./Aboutme"
import { Home } from "./Home"
import { Projects } from "./Projects"
import { Resume } from "./Resume"
import { Skills } from "./Skills"


export const AllRoutes=()=>{
    return(
    <>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutme" element={<Aboutme></Aboutme>}></Route>
        <Route path="/contact" element={<Skills></Skills>}></Route>
        <Route path="/Project" element={<Projects></Projects>}></Route>
        <Route path="/Skills" element={<Skills></Skills>}></Route>
        <Route path="/Resume" element={<Resume></Resume>}></Route>
    </Routes>
    </>
    )
}