const express = require("express");
const router = express.Router();
const Form = require("./models/formModel");

router.route("/create").post((req, res) => {
  const pFirstName = req.body.pFirstName;
  const pLastName = req.body.pLastName;
  const homeNumber = req.body.homeNumber;
  const cellPhoneNumber = req.body.cellPhoneNumber;
  const email = req.body.email;
  const streetAddress = req.body.streetAddress;
  const city = req.body.city;
  const province = req.body.province;
  const postalCode = req.body.postalCode;
  const childFirstName = req.body.childFirstName;
  const childLastName = req.body.childLastName;
  const childID = req.body.childID;
  const gender = req.body.gender;
  const birthDate = req.body.birthDate;
  const livesAtHome = req.body.livesAtHome;
  const typeOfService = req.body.typeOfService;
  const albertaHealthCardNumber = req.body.albertaHealthCardNumber;
  const diagnoses = req.body.diagnoses;
  const eating = req.body.eating;
  const dressing = req.body.dressing;
  const toileting = req.body.toileting;
  const activities = req.body.activities;
  const speechAndHearing = req.body.speechAndHearing;
  const vision = req.body.vision;
  const mobility = req.body.mobility;
  const specialInstructions = req.body.specialInstructions;
  const primaryDoctor = req.body.primaryDoctor;
  const clinic = req.body.clinic;
  const clinicAddress = req.body.clinicAddress;
  const clinicPhone = req.body.clinicPhone;
  const emergencyTransport = req.body.emergencyTransport;
  const emergencyOption = req.body.emergencyOption;
  const medications = req.body.medications;
  const dosage = req.body.dosage;
  const numOfTimes = req.body.numOfTimes;
  const prescribedFor = req.body.prescribedFor;
  const medications2 = req.body.medications2;
  const dosage2 = req.body.dosage2;
  const numOfTimes2 = req.body.numOfTimes2;
  const prescribedFor2 = req.body.prescribedFor2;
  const medications3 = req.body.medications3;
  const dosage3 = req.body.dosage3;
  const numOfTimes3 = req.body.numOfTimes3;
  const prescribedFor3 = req.body.prescribedFor3;
  const signature = req.body.signature;
  const newForm = new Form({
    pFirstName,
    pLastName,
    homeNumber,
    cellPhoneNumber,
    email,
    streetAddress,
    city,
    province,
    postalCode,
    childFirstName,
    childLastName,
    childID,
    gender,
    birthDate,
    livesAtHome,
    typeOfService,
    albertaHealthCardNumber,
    diagnoses,
    eating,
    dressing,
    toileting,
    activities,
    speechAndHearing,
    vision,
    mobility,
    specialInstructions,
    primaryDoctor,
    clinic,
    clinicAddress,
    clinicPhone,
    emergencyTransport,
    emergencyOption,
    medications,
    dosage,
    numOfTimes,
    prescribedFor,
    medications2,
    dosage2,
    numOfTimes2,
    prescribedFor2,
    medications3,
    dosage3,
    numOfTimes3,
    prescribedFor3,
  });

  newForm.save();
});

router.route("/").get((req, res) => {
  Form.find().then((foundForm) => res.json(foundForm));
});

module.exports = router;
