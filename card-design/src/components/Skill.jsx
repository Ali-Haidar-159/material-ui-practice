import { Cards } from "./Card"
import { Navbar } from "./Navbar"

function Skill ()
{

    let cardsName = ["Design1" , "Design2" , "Design3"] ;

let design = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    Padding : "10px" ,
    textAlign : "center"
}


    return (

        <>
        
            <Navbar />

            <div style={design} >

                {cardsName.map(function(item){

                    return <Cards name={item} style={{margin:"0 auto" , display:"block"}} />

                })}

            </div>
        
        </>

    )
}

export {Skill}