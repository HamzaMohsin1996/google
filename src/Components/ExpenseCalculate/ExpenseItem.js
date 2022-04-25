import {React, useState} from 'react';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Calender from '../Calender';


const  ExpenseItem = (props) =>{
  // const [title,setTitle] = useState(props.title);


    return (  
      <div>
        <Box sx={{padding: '20px',background: '#ebebeb',borderRadius: '10px',margin:'10px 0',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
         <Calender date={props.date}/>
          <Box sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',paddingLeft:'20px',width: '100%'}}>
          <Typography variant="h5">{props.title}</Typography> 
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
          <Typography variant="h6" sx={{mr:3}}>${props.ammount}</Typography> 
          
          </Box>
          </Box>
        </Box>
        
      </div>
    );
  }
export default ExpenseItem;
