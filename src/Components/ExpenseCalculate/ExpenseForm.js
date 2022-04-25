import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const ExpenseForm = () => {
    return(
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"
            label="Price"
            defaultValue=""
            fullWidth={true}
          />
        </Grid>
      </Grid>
          </div>
      </Box>
    )
}

export default ExpenseForm;