import { React, useState } from "react";
import ExpenseItem from "./ExpenseCalculate/ExpenseItem";
import { Typography, Button, Box } from "@mui/material";
import Container from "@mui/material/Container";
import AddExpenseModal from "./Modal/AddExpense";
const dummy_data = [
  {
    id: "1",
    title: "Car Insurance",
    ammount: "250",
    date: new Date(2021, 5, 12),
  },
  {
    id: "2",
    title: "Fuel",
    ammount: "50",
    date: new Date(2021, 5, 13),
  },
  {
    id: "1",
    title: "Repairing",
    ammount: "100",
    date: new Date(2021, 5, 14),
  },
];
const Expenses = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [expenses, setExpenses] = useState(dummy_data);

  const addExpenseHandler = (expense) => {
    console.log(expense ,'in App.js');
    setExpenses([expense, ...expenses])
  }
  return (
    <Container maxWidth="100 ">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0",
        }}
      >
        <Typography variant="h4">Expense Calculator App</Typography>
        <Button variant="contained" onClick={handleOpen}>
          Add ExpenseItem
        </Button>
      </Box>
      {console.log(expenses,'expenses')}
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          ammount={expense.ammount}
          date={expense.date}
        />
      ))}
      <AddExpenseModal handleOpen={open} handleClose={handleClose} onAddExpense={addExpenseHandler} items={expenses}/>
    </Container>
  );
};

export default Expenses;
