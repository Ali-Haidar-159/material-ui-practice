import { Autocomplete, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

function Profile() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    let courses = ["bangla", "english", "math", "ict"];

    let [open, setOpen] = useState(false);
    let [open2, setOpen2] = useState(false);

    function magic() {
        setOpen(true);
    }

    return (
        <>
        <Button onClick={magic} variant="contained">Open The Modal</Button>

        <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style}>
            <Typography>
                My name is Ali
            </Typography>
            </Box>
        </Modal>

        <List sx={{ width: 250 }}>
            {courses.map((item, index) => (
            <ListItem key={index}>
                <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemButton>
                <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>

        <Autocomplete
            sx={{ width: 260 }}
            options={courses}
            renderInput={(params) => (
            <TextField {...params} label="Select one course" />
            )}
        />

            <Button onClick={function(){setOpen2(true)}} >Open SideNavbar</Button>
            <Drawer   open={open2} onClose={()=>setOpen2(false)}>

                <List>

                    <ListItemText>A</ListItemText>
                    <ListItemText>B</ListItemText>
                    <ListItemText>C</ListItemText>
                    <ListItemText>D</ListItemText>

                </List>

            </Drawer>

        </>
    );
}

export { Profile }
