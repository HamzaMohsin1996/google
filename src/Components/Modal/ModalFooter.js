import {Button, Box} from '@mui/material';

const ModalFooter = (props) => {
    return(
        <Box sx={{borderTop: '1px solid #cccc',paddingTop:'20px',display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
         <Button variant='outlined' sx={{marginRight:'20px'}} onClick={props.closeModal} color='secondary'>Cancel</Button>
         <Button variant='contained' type="submit" onClick={props.submitBtn}>Submit</Button>
     </Box>
    )
}
export default ModalFooter;