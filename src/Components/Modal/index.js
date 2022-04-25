import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalHeader from './ModalHeader';
import ExpenseForm from '../ExpenseCalculate/ExpenseForm';

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
            <ModalHeader text="Adding Expense" closeModal={handleClose}/>
          <ExpenseForm />
        </Box>
      </Modal>
    </div>
  );
}