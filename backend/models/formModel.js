const mongoose = require("mongoose");

const Schema = mongoose.Schema

const formsSchema = new Schema({
  pFirstName: {
    type: String,
},
  pLastName:  {
    type: String,
},
  homeNumber:  {
    type: String,
},
  cellPhoneNumber:  {
    type: String,
},
  email:  {
    type: String,
},
  streetAddress:  {
    type: String,
},
  city:  {
    type: String,
},
  province:  {
    type: String,
},
  postalCode:  {
    type: String,
},
  childFirstName:  {
    type: String,
},
  childLastName:  {
    type: String,
},
  childID:  {
    type: String,
},
  gender:  {
    type: String,
},
  birthDate:  {
    type: String,
},
  livesAtHome:  {
    type: String,
},
  typeOfService:  {
    type: String,
},
  albertaHealthCardNumber:  {
    type: String,
},
  diagnoses:  {
    type: String,
},
  eating:  {
    type: String,
},
  dressing:  {
    type: String,
},
  toileting:  {
    type: String,
},
  activities:  {
    type: String,
},
  speechAndHearing:  {
    type: String,
},
  vision:  {
    type: String,
},
  mobility:  {
    type: String,
},
  specialInstructions:  {
    type: String,
},
  primaryDoctor:  {
    type: String,
},
  clinic:  {
    type: String,
},
  clinicAddress:  {
    type: String,
},
  clinicPhone:  {
    type: String,
},
  emergencyTransport:  {
    type: String,
},
  emergencyOption:  {
    type: String,
},
  medications:  {
    type: String,
},
  dosage:  {
    type: String,
},
  numOfTimes:  {
    type: String,
},
  prescribedFor:  {
    type: String,
},
  medications2:  {
    type: String,
},
  dosage2:  {
    type: String,
},
  numOfTimes2:  {
    type: String,
},
  prescribedFor2:  {
    type: String,
},
  medications3:  {
    type: String,
},
  dosage3:  {
    type: String,
},
  numOfTimes3:  {
    type: String,
},
  prescribedFor3:  {
    type: String,
},
});

module.exports = mongoose.model('Form', formsSchema)
