import { React, useState } from "react";
import ExpenseItem from "./ExpenseCalculate/ExpenseItem";
import { Typography, Button, Box } from "@mui/material";
import Container from "@mui/material/Container";
import Modal from "../Components/Modal/index";

const Expenses = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const expense = [
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
  return (
    <Container maxWidth="100 ">
      <Box sx={{display:'flex',alignItems: 'center',justifyContent: 'space-between',padding: '20px 0'}}>
        <Typography variant="h4" >
          Expense Calculator App
        </Typography>
        <Button variant="contained" onClick={handleOpen}>
          Add ExpenseItem
        </Button>
      </Box>

      <ExpenseItem
        title={expense[0].title}
        ammount={expense[0].ammount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        ammount={expense[1].ammount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        ammount={expense[2].ammount}
        date={expense[2].date}
      />
      <Modal handleOpen={open} handleClose={handleClose} />
    </Container>
  );
};

export default Expenses;
