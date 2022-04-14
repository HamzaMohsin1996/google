import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';
import TypeHead from './TypeHead';

export default function InputSearch() {
  return (
    <>
    <Box sx={{minWidth: '700px',border: '1px solid #dfe1e5',borderRadius: '30px',padding: '10px 20px',position: 'relative',display: 'flex',alignItems: 'center'}}>
        <SearchIcon sx={{color:'#8894ad',marginRight: '10px'}}/>
        <TypeHead />
        <Box>
        <Tooltip title="Search By Voice">
            <IconButton>
                <MicNoneIcon />
            </IconButton>
            </Tooltip>
        </Box>
    </Box>
   
    </>
  );
}