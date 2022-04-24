import {React, useState} from 'react';
import { Typography,Button } from "@mui/material";
import { Box } from "@mui/system";
import Calender from '../Calender';
import Modal from '../Modal/index';

const  ExpenseItem = (props) =>{
  // const [title,setTitle] = useState(props.title);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (  
      <div>
        <Box sx={{padding: '20px',background: '#ebebeb',borderRadius: '10px',margin:'10px 0',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
         <Calender date={props.date}/>
          <Box sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',paddingLeft:'20px',width: '100%'}}>
          <Typography variant="h5">{props.title}</Typography> 
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
          <Typography variant="h6" sx={{mr:3}}>${props.ammount}</Typography> 
          <Button variant="contained" onClick={handleOpen}>Click Me</Button>
          </Box>
          </Box>
        </Box>
        <Modal handleOpen={open} handleClose={handleClose}/>
      </div>
    );
  }
export default ExpenseItem;
