import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalHeader from "./ModalHeader";
import ExpenseForm from "../ExpenseCalculate/ExpenseForm";
import ModalFooter from "./ModalFooter";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid transparent ",
  boxShadow: 24,
  p: 2,
};

export default function BasicModal(props) {
  const { handleOpen, handleClose } = props;

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData , "Check");
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData , 'expense log');
  }

  const SubmitHandler = (event) => {
    // SaveExpenseDataHandler();
    console.log(event.target.value);
  }
  
  return (
    <div>
      <Modal
        open={handleOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-header">
            <ModalHeader text="Adding Expense" closeModal={handleClose} />
          </div>
          <div className="modal-body">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} submitBtn={SubmitHandler} />
          </div>
          <div className="modal-footer">
            <ModalFooter  closeModal={handleClose} submitBtn={SubmitHandler} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
