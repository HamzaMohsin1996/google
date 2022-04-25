import {Button, Box, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';




const ModalHeader = (props) => {
return(
     <Box sx={{borderBottom: '1px solid #cccc',paddingBottom:'20px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
         <Typography variant='h6'>{props.text}</Typography>
         <Button variant='outlined' sx={{borderRadius: '30px',width:'30px',height:'30px',minWidth:'auto'}} onClick={props.closeModal}><CloseIcon fontSize='16px'/></Button>
     </Box>
        
    )
}
export default ModalHeader;