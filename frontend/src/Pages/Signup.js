import { useState } from "react";
import { useSignup } from "../Hooks/useSignup";
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
  const { signup, error, isLoading } = useSignup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    if (!email) {
      alert("Email field is empty");
      return;
    }
    
    if (!firstName) {
      alert("First name field is empty");
      return;
    }

    if (!lastName) {
      alert("Last name field is empty");
      return;
    }
    if (!password) {
      alert("Password field is empty");
      return;
    }

    await signup(email, password, firstName, lastName);

    console.log(email, firstName, lastName, password);
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.root}
      onSubmit={handleSubmit}
    >
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          label="First Name"
          variant="outlined"
          type="text"
          required
          className={classes.textField}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          type="text"
          required
          className={classes.textField}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
          className={classes.textField}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          required
          className={classes.textField}
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
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
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default Signup;
