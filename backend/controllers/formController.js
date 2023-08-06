const Form = require("../models/formModel")
const mongoose = require('mongoose')


// create new form
const createForm = async (req, res) => {

    //add form to db
    const {pFirstName,
         pLastName,
        homeNumber ,
        cellPhoneNumber ,
        email ,
        streetAddress ,
        city ,
        province ,
        postalCode ,
        childFirstName ,
        childLastName ,
        childID ,
        gender ,
        birthDate ,
        livesAtHome ,
        typeOfService ,
        albertaHealthCardNumber ,
        diagnoses ,
        eating ,
        dressing ,
        toileting ,
        activities ,
        speechAndHearing ,
        vision ,
        mobility ,
        specialInstructions ,
        primaryDoctor ,
        clinic ,
        clinicAddress ,
        clinicPhone ,
        emergencyTransport ,
        emergencyOption ,
        medications ,
        dosage ,
        numOfTimes ,
        prescribedFor ,
        medications2 ,
        dosage2 ,
        numOfTimes2 ,
        prescribedFor2 ,
        medications3 ,
        dosage3 ,
        numOfTimes3 ,
        prescribedFor3} = req.body
    try{
        const form = await Form.create({pFirstName,
            pLastName,
           homeNumber ,
           cellPhoneNumber ,
           email ,
           streetAddress ,
           city ,
           province ,
           postalCode ,
           childFirstName ,
           childLastName ,
           childID ,
           gender ,
           birthDate ,
           livesAtHome ,
           typeOfService ,
           albertaHealthCardNumber ,
           diagnoses ,
           eating ,
           dressing ,
           toileting ,
           activities ,
           speechAndHearing ,
           vision ,
           mobility ,
           specialInstructions ,
           primaryDoctor ,
           clinic ,
           clinicAddress ,
           clinicPhone ,
           emergencyTransport ,
           emergencyOption ,
           medications ,
           dosage ,
           numOfTimes ,
           prescribedFor ,
           medications2 ,
           dosage2 ,
           numOfTimes2 ,
           prescribedFor2 ,
           medications3 ,
           dosage3 ,
           numOfTimes3 ,
           prescribedFor3})
        res.status(200).json(form)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}
const deleteForm = async (req, res) => {
    //delete form from db
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such form'})
    }

    const form = await Form.findOneAndDelete({_id: id})

    if (!form) {
        return res.status(404).json({error: 'No such form'})
    }

    res.status(200).json(form)
}

module.exports = { createForm, deleteForm }