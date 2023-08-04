import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AdminTest from './Admin';
import RabboniForm from './RaboboniFormProfile'
import { useState } from 'react';
import FormContainer from '../Components/FormContainer';

  const theme = createTheme({
    status: {
      danger: red[200],
    },
  });
 
function Profile (){

  const [forms, setForms] = useState([]);




  function addForm(newForm) {

    setForms(prevForms => {

      return [...prevForms, newForm];

    });

  }

    return (
        <ThemeProvider theme={theme}>
            <Link to ='/rabboniform'>
            <Button variant='contained'>Rabboni Form</Button>
            </Link>
            <RabboniForm onAdd={addForm} />
            {forms.map((formItem) => {
              return <FormContainer
                pFirstName={formItem.pFirstName}
                pLastName={formItem.pLastName}
                homeNumber={formItem.homeNumber}
                cellPhoneNumber={formItem.cellPhoneNumber}
                email={formItem.email}
                streetAddress={formItem.streetAddress}
                city={formItem.city}
                province={formItem.province}
                postalCode={formItem.postalCode}
                childFirstName={formItem.childFirstName}
                childLastName={formItem.childLastName}
                childID={formItem.childID}
                gender={formItem.gender}
                birthDate={formItem.birthDate}
                livesAtHome={formItem.livesAtHome}
                typeOfService={formItem.typeOfService}
                albertaHealthCardNumber={formItem.albertaHealthCardNumber}
                diagnoses={formItem.diagnoses}
                eating={formItem.eating}
                dressing={formItem.dressing}
                toileting={formItem.toileting}
                activities={formItem.activities}
                speechAndHearing={formItem.speechAndHearing}
                vision={formItem.vision}
                mobility={formItem.mobility}
                specialInstructions={formItem.specialInstructions}
                primaryDoctor={formItem.primaryDoctor}
                clinic={formItem.clinic}
                clinicAddress={formItem.clinicAddress}
                clinicPhone={formItem.clinicPhone}
                emergencyTransport={formItem.emergencyTransport}
                emergencyOption={formItem.emergencyOption}
                medications={formItem.medications}
                dosage={formItem.dosage}
                numOfTimes={formItem.numOfTimes}
                prescribedFor={formItem.prescribedFor}
                medications2={formItem.medications2}
                dosage2={formItem.dosage2}
                numOfTimes2={formItem.numOfTimes2}
                prescribedFor2={formItem.prescribedFor2}
                medications3={formItem.medications3}
                dosage3={formItem.dosage3}
                numOfTimes3={formItem.numOfTimes3}
                prescribedFor3={formItem.prescribedFor3}
                signature={formItem.signature}
              />
            })}
      </ThemeProvider>
    )
}
 
export default Profile;