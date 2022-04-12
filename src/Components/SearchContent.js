import Box from '@mui/material/Box';
import GoogleImg from '../Assets/Img/logo.png';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import InputSearchArea from './InputSearch';

export default function SearchContent() {
  return (
    <>
    <Box sx={{ display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column' }} style={{height: 'calc(100vh - 140px)'}} >
        <img src={GoogleImg} alt="Google Image" style={{
        width: 292,
        height: 92,
      }}/>
      <Box sx={{padding: '20px 0'}}>
       <InputSearchArea />
       </Box>
      <Box sx={{padding: '20px 0'}}>  
      <Button variant="outlined"  sx={{margin: '0 10px'}}>Google Search</Button>
      <Button variant="outlined"  sx={{margin: '0 10px'}} >I'm Feeling Lucky"</Button>
      </Box>
     
      <Box sx={{display: 'flex',alignItems: 'center'}}>
          <Box sx={{ m: "0" }}>Google offered in: </Box>
          <Link href="#" color="inherit" underline="none" ml={1}>اردو</Link>
          <Link href="#" color="inherit" underline="none" mx={1}>پښتو</Link>
          <Link href="#" color="inherit" underline="none" mx={1}>سنڌي</Link>
      </Box>
    </Box>
    </>
  );
}