import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AdminTest from "./Admin";
import RabboniForm from "./RaboboniFormProfile";
import { useState } from "react";
import FormContainer from "../Components/FormContainer";
import AccountPageContent from "../Components/AccountPageContent";

const theme = createTheme({
  status: {
    danger: red[200],
  },
});

function Profile() {
  const [forms, setForms] = useState([]);

  function addForm(newForm) {
    setForms((prevForms) => {
      return [...prevForms, newForm];
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <AccountPageContent />
    </ThemeProvider>
  );
}

export default Profile;
