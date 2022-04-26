import  React , {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Date from '../Datepicker/index';
import {Button} from '@mui/material';

const ExpenseForm = (props) => {
  const [enteredTitle,SetEnteredTitle] = useState('');
  const [enteredPrice,SetEnteredPrice] = useState('');
  const [dateChange ,setDateChange] = useState('');
  
  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
    console.log(event.target.value);
  };
  const priceChangeHandler = (event) => {
    SetEnteredPrice(event.target.value);
    console.log(event.target.value);
  }
    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        setDateChange(event.target.value);
    }
   
const submitHandler = (event) => {
    // event.prevent.default();
    event.preventDefault();
    const expenseData  = {
      title: enteredTitle,
      ammount: enteredPrice,
      date: new Date(dateChange)
    };
    console.log(expenseData);
    props.submitBtn();
    props.onSaveExpenseData(expenseData);
    SetEnteredTitle('');
    SetEnteredPrice('');
    setDateChange('');
}

    return(
      <>
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
        <Grid item xs={12}>
        <Button variant='contained' type="submit">Submit</Button>
        </Grid>
      </Grid>
      
          </div>
      </Box>
      </>
    )
}

export default ExpenseForm;