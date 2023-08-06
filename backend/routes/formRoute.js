const {deleteForm} = require('../controllers/formController')
const express = require("express");
const router = express.Router();
const Form = require("../models/formModel");
const requireAuth = require('../middleware/requireAuth')



router.route("/create").post( async (req, res) => {
  const pFirstName = req.body.newForm.pFirstName;
  const pLastName = req.body.newForm.pLastName;
  const homeNumber = req.body.newForm.homeNumber;
  const cellPhoneNumber = req.body.newForm.cellPhoneNumber;
  const email = req.body.newForm.email;
  const streetAddress = req.body.newForm.streetAddress;
  const city = req.body.newForm.city;
  const province = req.body.newForm.province;
  const postalCode = req.body.newForm.postalCode;
  const childFirstName = req.body.newForm.childFirstName;
  const childLastName = req.body.newForm.childLastName;
  const childID = req.body.newForm.childID;
  const gender = req.body.newForm.gender;
  const birthDate = req.body.newForm.birthDate;
  const livesAtHome = req.body.newForm.livesAtHome;
  const typeOfService = req.body.newForm.typeOfService;
  const albertaHealthCardNumber = req.body.newForm.albertaHealthCardNumber;
  const diagnoses = req.body.newForm.diagnoses;
  const eating = req.body.newForm.eating;
  const dressing = req.body.newForm.dressing;
  const toileting = req.body.newForm.toileting;
  const activities = req.body.newForm.activities;
  const speechAndHearing = req.body.newForm.speechAndHearing;
  const vision = req.body.newForm.vision;
  const mobility = req.body.newForm.mobility;
  const specialInstructions = req.body.newForm.specialInstructions;
  const primaryDoctor = req.body.newForm.primaryDoctor;
  const clinic = req.body.newForm.clinic;
  const clinicAddress = req.body.newForm.clinicAddress;
  const clinicPhone = req.body.newForm.clinicPhone;
  const emergencyTransport = req.body.newForm.emergencyTransport;
  const emergencyOption = req.body.newForm.emergencyOption;
  const medications = req.body.newForm.medications;
  const dosage = req.body.newForm.dosage;
  const numOfTimes = req.body.newForm.numOfTimes;
  const prescribedFor = req.body.newForm.prescribedFor;
  const medications2 = req.body.newForm.medications2;
  const dosage2 = req.body.newForm.dosage2;
  const numOfTimes2 = req.body.newForm.numOfTimes2;
  const prescribedFor2 = req.body.newForm.prescribedFor2;
  const medications3 = req.body.newForm.medications3;
  const dosage3 = req.body.newForm.dosage3;
  const numOfTimes3 = req.body.newForm.numOfTimes3;
  const prescribedFor3 = req.body.newForm.prescribedFor3;
  const signature = req.body.newForm.signature;
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
    signature
  });
  try {
    await newForm.save();
    res.send("inserted data..")
} catch(err) {
    console.log(err)
}
});

router.route("/").get((req, res) => {
  Form.find().then((foundForm) => res.json(foundForm));
});

//delete form

router.use(requireAuth)

router.delete('/:id', deleteForm)


// router.post("/", createForm)

module.exports = router;
