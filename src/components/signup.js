import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material/";
//import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar>
            {/* <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon> */}
          </Avatar>
          <h2 style={headerStyle}>singup</h2>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Name"></TextField>
          <TextField fullWidth label="Email"></TextField>
          <TextField fullWidth label="Phone-Number"></TextField>
          <TextField fullWidth label="Password"></TextField>
          <TextField fullWidth label="Confirm Password"></TextField>
          <Button type="submit" variant="contained"></Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
