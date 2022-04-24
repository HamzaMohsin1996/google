import '../App.css';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function Home() {
  return (
    <>
     <Box sx={{ display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',padding: '20px',background: 'black',color: 'white',minHeight: 'calc(100vh - 128px)' }}>
        <Typography variant="h1" component="h2">Social Media PlatForm</Typography>
        <Typography variant="h6" component="h6">In Progress</Typography>
     </Box>
    </>
  );
}