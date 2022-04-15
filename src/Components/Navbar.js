import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import logo from '../Assets/Img/logo.png'


const Navbar = () => {
    return (
        <Box sx={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center',padding: '20px',background: 'transparent',color: 'black' }}>
            <Box>
                <Link href="/" color="inherit" underline="none" mx={2}><img src={logo} alt='Logo Image Here' className="logo-img" /></Link>
            </Box>
            <Box>
                <Link href="/google" color="inherit" underline="none" mx={2}>Google</Link>
                <Link href="/instagram" color="inherit" underline="none" mx={2}>Instagram</Link>
                <Link href="/facebook" color="inherit" underline="none" mx={2}>Facbook</Link>
            </Box>
        </Box>
    );
  }
  
  export default Navbar;