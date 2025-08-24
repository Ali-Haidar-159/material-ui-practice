import { Button, Card , CardContent, CardMedia , CardActions , Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useState } from "react";

function Cards(props)
{

    let [open , setOpen] = useState(false) ;

    function deleteHandler()
    {
        setOpen(function(){return true}) ;
    }

        return (
            <>
            <Card sx={{ maxWidth: 345 }} style={{...props.style}}>

                <CardMedia
                    sx={{ height: 140 }}
                    image="./public/aaa.png"
                    title="green iguana"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" onClick={deleteHandler} >Delete</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>


            </Card>

            <Dialog open={open} onClose={()=>{setOpen(function(){return false})}}>

                <DialogTitle>Dialog Title</DialogTitle>

                <DialogContent>
                    This is the dialog content.
                </DialogContent>

                <DialogActions>
                    <Button onClick={function(){return setOpen(false)}} >Close</Button>
                </DialogActions>

            </Dialog>

            </>

            );


}


export {Cards}