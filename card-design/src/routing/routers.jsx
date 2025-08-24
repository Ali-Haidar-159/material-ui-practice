import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Skill } from "../components/Skill";
import { Profile } from "../components/Profile";


function Routers ()
{
    return (<>

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={<Home/>} ></Route>
                <Route path="/skill" element={<Skill />} ></Route>
                <Route path="/profile" element={<Profile/>} ></Route>

            </Routes>

        </BrowserRouter>
    
    </>)
}

export {Routers}