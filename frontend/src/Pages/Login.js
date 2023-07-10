import { useState } from "react";

import { useLogin } from "../Hooks/useLogin";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@mui/material/Link";

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
  error: {
    color: "red",
    marginTop: theme.spacing(2),
    textAlign: "center",
    fontWeight: 700,
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

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (

    
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography variant="h4" className={classes.title}>
        Log in
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
        
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={isLoading}
          className={classes.button}
        >
          Log in
        </Button>
        {error && <div className={classes.error}>{error}</div>}
        <div className={classes.linkContainer}>
          <Link href="/signup" className={classes.link}>
            Create an Account
          </Link>
          <Link href="/forgot-password" className={classes.link}>
            Forgot Password?
          </Link>
          <Link href="/employee-login" className={classes.link}>
            Are you an Employee?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;