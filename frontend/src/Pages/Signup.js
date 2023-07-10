import { useState } from "react";
import { useLogin } from "../Hooks/useLogin";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    maxWidth: "400px",
    marginTop: "2cm",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "2px",
    textAlign: "center",
    fontFamily: "futura, sans-serif",
  },
  form: {
    width: "100%",
  },
  textField: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  button: {
    width: "100%",
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    letterSpacing: "1px",
  },
 
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    marginTop: theme.spacing(1),
    textDecoration: "none",
    color: theme.palette.secondary.main,
    fontWeight: 700,
    letterSpacing: "1px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography variant="h4" className={classes.title}>
        Create an account
      </Typography>
      <div className={classes.form}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          className={classes.textField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
          className={classes.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          required
          className={classes.textField}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={isLoading}
          className={classes.button}
        >
          Sign up
        </Button>
       
      </div>
    </form>
  );
};

export default Signup;