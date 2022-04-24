import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const  Calender = (props) => {
  const month = props.date.toLocaleDateString("en-Uc", { month: "long" });
  const day = props.date.toLocaleDateString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "black",
        color: "white",
        padding: "15px",
        borderRadius: "4px",
      }}
    >
      <Typography>{month}</Typography>
      <Typography>{day}</Typography>
      <Typography>{year}</Typography>
    </Box>
  );
}

export default Calender;
