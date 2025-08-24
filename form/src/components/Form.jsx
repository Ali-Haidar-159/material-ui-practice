import {useFormik} from "formik" ;
import {ButtonGroup , Button , TextField , Typography, FormControlLabel, FormGroup , Checkbox, FormControl, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio} from "@mui/material" ;

function Form ()
{

    let formik = useFormik({

        initialValues : {
            name : "" ,
            email : "" ,
            password : "" ,
            isAgree : false ,
            country : "" ,
            gender : "" ,
        } ,
        onSubmit : function(values){
            console.log(values) ;
        }

    })

    let design = {
        display : "block" ,
        margin : "10px"
    }

    return (

        <div>

            <Typography variant="h4" component={"h5"}>Registration Form</Typography>

            <form onSubmit={formik.handleSubmit}>

                <TextField name="name" value={formik.values.name} onChange={formik.handleChange} type="text" label="Name" sx={design}></TextField>
                <TextField name="email" value={formik.values.email} onChange={formik.handleChange} type="email" label="Email" sx={design}></TextField>
                <TextField name="password" value={formik.values.password} onChange={formik.handleChange} type="password" label="Password" sx={design}></TextField>

                <FormControlLabel name="isAgree" onChange={formik.handleChange} label="I agree all the terms and conditions." control={<Checkbox/>}></FormControlLabel>

                <FormControl fullWidth>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select labelId="country-label" id="country" defaultValue=""  name="country" onChange={formik.handleChange}>
                        <MenuItem value="bd">Bangladesh</MenuItem>
                        <MenuItem value="in">India</MenuItem>
                        <MenuItem value="us">USA</MenuItem>
                    </Select>
                </FormControl>

                <FormControl name="gender" onChange={formik.handleChange}>
                    <FormLabel id="gender-label">Gender</FormLabel>
                    <RadioGroup row name="gender" aria-labelledby="gender-label">
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <Button type="submit" variant="outlined" sx={design}>Register</Button>

            </form>

        </div>

    )

}


export {Form}