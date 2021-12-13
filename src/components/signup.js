import { Avatar, Grid, Paper, Typography } from "@mui/material/";

const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          <Avatar></Avatar>
          <h2>singup</h2>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signup;
