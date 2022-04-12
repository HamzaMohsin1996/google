import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Menu from './Menu';

export default function Header() {
  return (
    <>
    <Box sx={{ display: 'flex',justifyContent: 'end',alignItems: 'center' }}>
    <Link href="https://mail.google.com/mail/u/0/" color="inherit" underline="none" mx={2}>Gmail</Link>
    <Link href="https://www.google.com.pk/imghp?hl=en&ogbl" color="inherit" underline="none">Images</Link>
     <Menu />
    </Box>
    </>
  );
}