import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField , AppBar , Toolbar , Typography  , IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from "react"

function Form ()
{

    let [allData , setAllData] = useState({

        name : "" ,
        email : "" ,
        password : "" ,
        isAgree : false ,
        district : "" ,
        gender : "" ,

    }) ;

    function handleChange(e)
    {   
        setAllData(function(pv){

            return {

                ...pv ,
                [e.target.name] : [e.target.value]

            }

        })
    }

    function handleSubmit(e)
    {
        e.preventDefault() ;
        console.log(allData) ;
    }

    return (<>

        <Box>

                <AppBar position="static">

                    <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />

                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Material UI
                    </Typography>

                    <Button color="inherit">Login</Button>
                    
                    </Toolbar>

                </AppBar>

            </Box>

        
        <form onSubmit={handleSubmit}>

            <FormGroup> 

                <TextField type="text" name="name" label="Name" onChange={handleChange} sx={{margin:"10px"}}></TextField>
                <TextField type="email" name="email" label="Email" onChange={handleChange} sx={{margin:"10px"}}></TextField>
                <TextField type="password" name="password" label="Password" onChange={handleChange} sx={{margin:"10px"}}></TextField>

            </FormGroup>

            <FormGroup>

                <FormControlLabel onChange={function(){

                    setAllData(function(pv){
                        return {
                            ...pv ,
                            isAgree : !pv.isAgree 
                        }
                    })

                }} control={<Checkbox/>} label="Yes ! I agree all the terms and conditions" ></FormControlLabel>

            </FormGroup>

            <FormControl fullWidth>

                <InputLabel id="dis">District</InputLabel>
                <Select labelId="dis" onChange={handleChange} name="district" value={allData.district} >

                    <MenuItem value="dhaka">Dhaka</MenuItem>
                    <MenuItem value="raj">Rajshahi</MenuItem>
                    <MenuItem value="c.nawabganj">Chapai Nawabganj</MenuItem>
                    <MenuItem value="rangpur">Rangpur</MenuItem>

                </Select>

            </FormControl>

            <FormControl>

                <FormLabel>Gender</FormLabel>

                <RadioGroup name="gender" onChange={handleChange}>

                    <FormControlLabel value={"male"} control={<Radio/>} label="Male" ></FormControlLabel>
                    <FormControlLabel value={"female"} control={<Radio/>} label="Female" ></FormControlLabel>
                    <FormControlLabel value={"others"} control={<Radio/>} label="Others" ></FormControlLabel>

                </RadioGroup>

            </FormControl>

            <br />
            <br />
            <br />
            <br />
            <Button type="submit" variant="outlined">Register</Button>

        </form>

    
    </>)

}

export {Form}