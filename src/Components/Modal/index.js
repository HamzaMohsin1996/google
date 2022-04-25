import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import classes from './Modal.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid transparent ',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
    const { handleOpen, handleClose } = props;
  
 
  return (
    <div>
      <Modal
           open={handleOpen}
           onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Button variant='contained' onClick={handleClose} className={classes.closeBtn}style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"
    }}>Close</Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}