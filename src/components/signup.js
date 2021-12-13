import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material/";
//import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Checkbox from "@mui/material/Checkbox";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Signup = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 5 };
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
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
          ></TextField>
          <TextField fullWidth label="Email"></TextField>

          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label="Phone-Number"></TextField>
          <TextField fullWidth label="Password"></TextField>
          <TextField fullWidth label="Confirm Password"></TextField>
          <Checkbox {...label} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={marginTop}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
