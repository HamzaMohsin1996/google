import { Typography , Box , Link} from '@mui/material';
import { grey } from '@mui/material/colors';



export default function Footer() {
    const color = grey[100];
  return (
    <>
    <Box bgcolor={color} p={1} sx={{ borderBottom: 1, borderColor: 'grey.300' }}>
      <Typography variant="h6" component="h2" px={1} sx={{color:'grey.500'}}>Pakistan</Typography>  
    </Box>
    <Box bgcolor={color} p={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <Box> 
        <Link href="https://about.google/?utm_source=google-PK&utm_medium=referral&utm_campaign=hp-footer&fg=1" color="inherit" underline="none" p={0.75} sx={{color:'grey.500',display: 'inline-block'}}>About</Link>
        <Link href="https://ads.google.com/intl/en_pk/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" color="inherit" underline="none" mx={1} p={0.75} sx={{color:'grey.500',display: 'inline-block'}}>Advertising</Link>
        <Link href="https://www.google.com.pk/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none" color="inherit" underline="none"  mx={1} p={0.75} sx={{color:'grey.500',display: 'inline-block'}}>Buisness</Link>
        <Link href="https://www.google.com/search/howsearchworks/?fg=1" color="inherit" underline="none" mx={1} p={0.75} sx={{color:'grey.500',display: 'inline-block'}}>How Search Works</Link>
      </Box>
      <Box>
      <Link href="https://policies.google.com/privacy?hl=en-PK&fg=1" color="inherit" underline="none"  mx={1} p={0.75} sx={{color:'grey.500',display: 'inline-block'}}>Privacy</Link>
      <Link href="https://policies.google.com/terms?hl=en-PK&fg=1" color="inherit" underline="none"  mx={1} p={0.75} sx={{color:'grey.500',display: 'inline-block'}}>Terms</Link>
      <Link href="#" color="inherit" underline="none"  mx={1} p={0.75} sx={{color:'grey.500',display: 'inline-block'}}>Settings</Link>

      </Box>

    </Box>
    </>
  );
}