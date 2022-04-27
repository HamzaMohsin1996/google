import  React , {useState} from 'react';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalHeader from "./ModalHeader";
import ExpenseForm from "../ExpenseCalculate/ExpenseForm";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Date from '../Datepicker/index';
import ModalFooter from "../Modal/ModalFooter";


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

const  AddExpense = (props) => {
  const { handleOpen, handleClose } = props;

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    console.log(expenseData , 'expense log');
  }
  const [enteredTitle,SetEnteredTitle] = useState('');
  const [enteredPrice,SetEnteredPrice] = useState('');
  const [dateChange ,setDateChange] = useState('');
  
  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    SetEnteredPrice(event.target.value);
  }
    const dateChangeHandler = (event) => {
        setDateChange(event.target.value);
    }
   
const submitHandler = (event) => {
    event.preventDefault();
    const expenseData  = {
      title: enteredTitle,
      ammount: enteredPrice,
      date: dateChange,
    };
    SaveExpenseDataHandler(expenseData);
    SetEnteredTitle('');
    SetEnteredPrice('');
    setDateChange('');
}
const BtnSubmitHandler = (event) => {
  console.log("handle Check");
  // handleClose(true);
}

 
  return (
    <div>
      <Modal
        open={handleOpen}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className="modal-header">
            <ModalHeader text="Adding Expense" closeModal={handleClose} />
          </div>
          <div className="modal-body">
            {/* <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} /> */}
            <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <div>
          <Grid container spacing={2}>
        <Grid item xs={12}>
          
           <TextField
            required
            id="outlined-required"
            label="Title"
            defaultValue=""
            fullWidth={true}
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Price"
            defaultValue=""
            fullWidth={true}
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <Date dateChange={dateChangeHandler} newValue={dateChange}/>
        </Grid>
        {
        //   <Grid item xs={12}>
        // <Button variant='contained' type="submit">Submit</Button>
        // </Grid>
        }
      </Grid>
      <div className="modal-footer">
            <ModalFooter  closeModal={handleClose} submitBtn={BtnSubmitHandler} />
          </div>
          </div>
      </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AddExpense;