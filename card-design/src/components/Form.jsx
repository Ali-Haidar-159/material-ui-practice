console.clear() ;

import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

function Form()
{

    let formik = useFormik({

        initialValues : {
            name : "" ,
            email : "" ,
            password : "" ,
            isAgree : false ,
        } ,

        onSubmit : function(values){
            console.log(values) ;
        }

    })

    return (

        <div>

            <form onSubmit={formik.handleSubmit}>

                <Box sx={{margin:"30px"}}>

                    <Typography sx={{textAlign:"center"}} variant="h6" component={"h2"} >Register New Account</Typography>

                    <FormGroup sx={{margin:"15px" , '& .MuiTextField-root' : {margin : "10px"}}}>

                        <TextField onChange={formik.handleChange} name="name" label="Name" type="text" ></TextField>
                        <TextField onChange={formik.handleChange} name="email" label="Email" type="email" ></TextField>
                        <TextField onChange={formik.handleChange} name="password" label="Password" type="password" ></TextField>

                    </FormGroup>

                    <FormGroup sx={{margin:"30px"}}>

                        <FormControlLabel onChange={formik.handleChange} name="isAgree" control={<Checkbox />} label="Yes ! I agree all the terms and conditions"></FormControlLabel>

                    </FormGroup>

                </Box>

                <Button sx={{margin:"auto" , display:"block"}}  variant="outlined" type="submit">Submit</Button>

            </form>

        </div>

    )

}

export {Form}