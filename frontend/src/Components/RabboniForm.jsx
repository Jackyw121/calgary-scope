import React from "react";
import { useState } from "react";
import axios from "axios";

function RabboniForm(props) {
  const [form, setForm] = useState({
    pFirstName: "",
    pLastName: "",
    homeNumber: "",
    cellPhoneNumber: "",
    email: "",
    streetAddress: "",
    city: "",
    province: "",
    postalCode: "",
    childFirstName: "",
    childLastName: "",
    childID: "",
    gender: "",
    birthDate: "",
    livesAtHome: "",
    typeOfService: "",
    albertaHealthCardNumber: "",
    diagnoses: "",
    eating: "",
    dressing: "",
    toileting: "",
    activities: "",
    speechAndHearing: "",
    vision: "",
    mobility: "",
    specialInstructions: "",
    primaryDoctor: "",
    clinic: "",
    clinicAddress: "",
    clinicPhone: "",
    emergencyTransport: "",
    emergencyOption: "",
    medications: "",
    dosage: "",
    numOfTimes: "",
    prescribedFor: "",
    medications2: "",
    dosage2: "",
    numOfTimes2: "",
    prescribedFor2: "",
    medications3: "",
    dosage3: "",
    numOfTimes3: "",
    prescribedFor3: "",
    signature: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  function submitForm(event) {
    const newForm = {
      pFirstName: form.pFirstName,
      pLastName: form.pLastName,
      homeNumber: form.homeNumber,
      cellPhoneNumber: form.cellPhoneNumber,
      email: form.email,
      streetAddress: form.streetAddress,
      city: form.city,
      province: form.province,
      postalCode: form.postalCode,
      childFirstName: form.childFirstName,
      childLastName: form.childLastName,
      childID: form.childID,
      gender: form.gender,
      birthDate: form.birthDate,
      livesAtHome: form.livesAtHome,
      typeOfService: form.typeOfService,
      albertaHealthCardNumber: form.albertaHealthCardNumber,
      diagnoses: form.diagnoses,
      eating: form.eating,
      dressing: form.dressing,
      toileting: form.toileting,
      activities: form.activities,
      speechAndHearing: form.speechAndHearing,
      vision: form.vision,
      mobility: form.mobility,
      specialInstructions: form.specialInstructions,
      primaryDoctor: form.primaryDoctor,
      clinic: form.clinic,
      clinicAddress: form.clinicAddress,
      clinicPhone: form.clinicPhone,
      emergencyTransport: form.emergencyTransport,
      emergencyOption: form.emergencyOption,
      medications: form.medications,
      dosage: form.dosage,
      numOfTimes: form.numOfTimes,
      prescribedFor: form.prescribedFor,
      medications2: form.medications2,
      dosage2: form.dosage2,
      numOfTimes2: form.numOfTimes2,
      prescribedFor2: form.prescribedFor2,
      medications3: form.medications3,
      dosage3: form.dosage3,
      numOfTimes3: form.numOfTimes3,
      prescribedFor3: form.prescribedFor3,
      signature: form.signature,
    };

    axios.post("https://calgary-scope.onrender.com/create", newForm);
  }

  return (
    <div className="container bg-light p-5  rounded-5">
      <h1 className="display-4 text-center mb-22">
        RABBONI SUPPORT SERVICES APPLICATION FOR SERVICE
      </h1>

      <form className="row g-3">
        <div className="col-md-12 mb-3">
          <label className="form-label">
            <h3>Client Information</h3>{" "}
          </label>
        </div>
        <div className="col-md-6 mb-3">
          <label for="pFirstName" className="form-label">
            Parent/Guardian First Name
          </label>
          <input
            name="pFirstName"
            onChange={handleChange}
            value={form.pFirstName}
            placeholder="First Name"
            type="text"
            className="form-control"
            id="pFirstName"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="pLastName" className="form-label">
            Parent/Guardian Last Name
          </label>
          <input
            name="pLastName"
            onChange={handleChange}
            value={form.pLastName}
            placeholder="Parents Last Name"
            type="text"
            className="form-control"
            id="pLastName"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="homeNumber" className="form-label">
            Home Phone
          </label>
          <input
            name="homeNumber"
            onChange={handleChange}
            value={form.homeNumber}
            placeholder="Home Number"
            type="tel"
            className="form-control"
            id="homeNumber"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="cellPhoneNumber" className="form-label">
            Cellphone
          </label>
          <input
            name="cellPhoneNumber"
            onChange={handleChange}
            value={form.cellPhoneNumber}
            placeholder="Cellphone Number"
            type="tel"
            className="form-control"
            id="cellPhoneNumber"
          />
        </div>
        <div className="col-md-12 mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Email"
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="streetAddress" className="form-label">
            Address
          </label>
          <input
            name="streetAddress"
            onChange={handleChange}
            value={form.streetAddress}
            placeholder="Street Address"
            type="text"
            className="form-control"
            id="streetAddress"
          />
        </div>
        <div className="col-md-2 mb-3">
          <label for="city" className="form-label">
            City
          </label>
          <input
            name="city"
            onChange={handleChange}
            value={form.city}
            placeholder="City"
            type="text"
            className="form-control"
            id="city"
          />
        </div>
        <div className="col-md-2 mb-3">
          <label for="province" className="form-label">
            Province
          </label>
          <input
            name="province"
            onChange={handleChange}
            value={form.province}
            placeholder="Province"
            type="text"
            className="form-control"
            id="province"
          />
        </div>
        <div className="col-md-2 mb-3">
          <label for="postalCode" className="form-label">
            Postal Code
          </label>
          <input
            name="postalCode"
            onChange={handleChange}
            value={form.postalCode}
            placeholder="Postal Code"
            type="text"
            className="form-control"
            id="postalCode"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="childFirstName" className="form-label">
            Child First Name
          </label>
          <input
            name="childFirstName"
            onChange={handleChange}
            value={form.childFirstName}
            placeholder="Child First Name"
            type="text"
            className="form-control"
            id="childFirstName"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="childLastName" className="form-label">
            Child Last Name
          </label>
          <input
            name="childLastName"
            onChange={handleChange}
            value={form.childLastName}
            placeholder="Child Last Name"
            type="text"
            className="form-control"
            id="childLastName"
          />
        </div>
        <div className="col-md-12 mb-3">
          <label for="childID" className="form-label">
            Child ID#
          </label>
          <input
            name="childID"
            onChange={handleChange}
            value={form.childID}
            placeholder="Child ID"
            type="text"
            className="form-control"
            id="childID"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="gender" className="form-label">
            Male/Female
          </label>
          <input
            name="gender"
            onChange={handleChange}
            value={form.gender}
            placeholder="Male/Female"
            type="text"
            className="form-control"
            id="gender"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="age" className="form-label">
            Age
          </label>
          <input
            name="age"
            onChange={handleChange}
            value={form.age}
            placeholder="Age"
            type="text"
            className="form-control"
            id="age"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="birthDate" className="form-label">
            Birth Date (M/D/Y)
          </label>
          <input
            name="birthDate"
            onChange={handleChange}
            value={form.birthDate}
            placeholder="Birth Date"
            type="text"
            className="form-control"
            id="birthDate"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="livesAtHome" className="form-label">
            Lives at home (Y/N)
          </label>
          <input
            name="livesAtHome"
            onChange={handleChange}
            value={form.livesAtHome}
            placeholder="Y/N"
            type="text"
            className="form-control"
            id="livesAtHome"
          />
        </div>
        <div className="col-md-12 mb-3">
          <label for="typeOfService" className="form-label">
            Type of Service Applying for
          </label>
          <input
            name="typeOfService"
            onChange={handleChange}
            value={form.typeOfService}
            placeholder="Type of Service"
            type="text"
            className="form-control"
            id="typeOfService"
          />
        </div>
        <div className="col-md-12 mb-3">
          <label for="albertaHealthCardNumber" className="form-label">
            Alberta Health Card Number
          </label>
          <input
            name="albertaHealthCardNumber"
            onChange={handleChange}
            value={form.albertaHealthCardNumber}
            placeholder="Alberta Health Card Number"
            type="text"
            className="form-control"
            id="albertaHealthCardNumber"
          />
        </div>

        <div className="col-md-12 mb-3">
          <label for="diagnoses" className="form-label">
            <h3>Diagnoses/Behaviours/Concerns</h3>
            <p>
              List & detail the diagnosis and/or functional loss or impairment
              of the child and how this is affecting the family and contributing
              to the need for service. Mandatory supporting documentation of the
              diagnosis and/or the professional assessment must be attached to
              the application.
            </p>
          </label>
          <textarea
            name="diagnoses"
            onChange={handleChange}
            value={form.diagnoses}
            className="form-control"
            id="diagnoses"
            rows="3"
          />
        </div>

        <div className="col-md-12 mb-3">
          <label className="form-label">
            <h3>Personal Care & Activities</h3>
          </label>
        </div>
        <div className="col-md-5 mb-3">
          <label for="eating" className="form-label mr-3">
            Eating
          </label>
          <select
            name="eating"
            onChange={handleChange}
            value={form.eating}
            className="col-md-8 form-select float-right"
            aria-label="Eating"
            id="eating"
          >
            <option selected>select here...</option>
            <option value="1">Independent</option>
            <option value="2">Prompts or reminders required</option>
            <option value="3">Some supports required</option>
            <option value="4">Full supports required</option>
          </select>
        </div>
        <div className="col-md-5 mb-3">
          <label for="dressing" className="form-label mr-3">
            Dressing
          </label>
          <select
            name="dressing"
            onChange={handleChange}
            value={form.dressing}
            className="col-md-8 form-select float-right"
            aria-label="Dressing"
            id="dressing"
          >
            <option selected>select here...</option>
            <option value="1">Independent</option>
            <option value="2">Prompts or reminders required</option>
            <option value="3">Some supports required</option>
            <option value="4">Full supports required</option>
          </select>
        </div>
        <div className="col-md-5 mb-3">
          <label for="toileting" className="form-label mr-3">
            Toileting
          </label>
          <select
            name="toileting"
            onChange={handleChange}
            value={form.toileting}
            className="col-md-8 form-select float-right"
            aria-label="Toileting"
            id="toileting"
          >
            <option selected>select here...</option>
            <option value="1">Independent</option>
            <option value="2">Prompts or reminders required</option>
            <option value="3">Some supports required</option>
            <option value="4">Full supports required</option>
          </select>
        </div>
        <div className="col-md-5 mb-3">
          <label for="activities" className="form-label mr-3">
            Activities
          </label>
          <select
            name="activities"
            onChange={handleChange}
            value={form.activities}
            className="col-md-8 form-select float-right"
            aria-label="Activities"
            id="activities"
          >
            <option selected>select here...</option>
            <option value="1">Independent</option>
            <option value="2">Prompts or reminders required</option>
            <option value="3">Some supports required</option>
            <option value="4">Full supports required</option>
          </select>
        </div>
        <div className="col-md-5 mb-3">
          <label for="speechAndHearing" className="form-label mr-3">
            Speech/Hearing
          </label>
          <select
            name="speechAndHearing"
            onChange={handleChange}
            value={form.speechAndHearing}
            className="col-md-8 form-select float-right"
            aria-label="Speech/Hearing"
            id="speechAndHearing"
          >
            <option selected>select here...</option>
            <option value="1">Independent</option>
            <option value="2">Prompts or reminders required</option>
            <option value="3">Some supports required</option>
            <option value="4">Full supports required</option>
          </select>
        </div>
        <div className="col-md-5 mb-3">
          <label for="vision" className="form-label mr-3">
            Vision
          </label>
          <select
            name="vision"
            onChange={handleChange}
            value={form.vision}
            className="col-md-8 form-select float-right"
            aria-label="Vision"
            id="vision"
          >
            <option selected>select here...</option>
            <option value="1">Independent</option>
            <option value="2">Prompts or reminders required</option>
            <option value="3">Some supports required</option>
            <option value="4">Full supports required</option>
          </select>
        </div>
        <div className="col-md-5 mb-3">
          <label for="mobility" className="form-label mr-3">
            Mobility
          </label>
          <select
            name="mobility"
            onChange={handleChange}
            value={form.mobility}
            className="col-md-8 form-select float-right"
            aria-label="Mobility"
            id="mobility"
          >
            <option selected>select here...</option>
            <option value="1">Independent</option>
            <option value="2">Prompts or reminders required</option>
            <option value="3">Some supports required</option>
            <option value="4">Full supports required</option>
          </select>
        </div>

        <div className="col-md-12 mb-3">
          <label for="specialInstructions" className="form-label">
            <h3>Special Instructions</h3>
            <p>
              Please describe any details that will assist the provider in
              meeting the individual needs of the client while they are in our
              respite care. Are there any bedtime routines or concerns that
              Rabboni Support Services should be aware of? Are there any eating
              habits, allergies, preferences that the provider should be aware
              of? Is there a safety plan or special supervision requirement that
              Rabboni should be aware of?
            </p>
          </label>
          <textarea
            name="specialInstructions"
            onChange={handleChange}
            value={form.specialInstructions}
            className="form-control"
            id="specialInstructions"
            rows="3"
          />
        </div>

        <div className="col-md-12 mb-3">
          <label className="form-label">
            <h3>Medical Information</h3>{" "}
          </label>
        </div>
        <div className="col-md-6 mb-3">
          <label for="primaryDoctor" className="form-label">
            Primary Doctor
          </label>
          <input
            name="primaryDoctor"
            onChange={handleChange}
            value={form.primaryDoctor}
            type="text"
            className="form-control"
            id="primaryDoctor"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="clinic" className="form-label">
            Clinic
          </label>
          <input
            name="clinic"
            onChange={handleChange}
            value={form.clinic}
            type="text"
            className="form-control"
            id="clinic"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="clinicAddress" className="form-label">
            Clinic Address
          </label>
          <input
            name="clinicAddress"
            onChange={handleChange}
            value={form.clinicAddress}
            type="text"
            className="form-control"
            id="clinicAddress"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="clinicPhone" className="form-label">
            Clinic Phone #
          </label>
          <input
            name="clinicPhone"
            onChange={handleChange}
            value={form.clinicPhone}
            type="text"
            className="form-control"
            id="clinicPhone"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="emergencyTransport" className="form-label">
            In case of an emergency, can client be transported to nearest
            hospital?
          </label>
          <input
            name="emergencyTransport"
            onChange={handleChange}
            value={form.emergencyTransport}
            type="text"
            className="form-control"
            id="emergencyTransport"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="emergencyOption" className="form-label">
            If no, where?
          </label>
          <input
            name="emergencyOption"
            onChange={handleChange}
            value={form.emergencyOption}
            type="text"
            className="form-control"
            id="emergencyOption"
          />
        </div>

        <div className="col-md-12 mb-3">
          <label className="form-label">
            <h3>Current Medications</h3>{" "}
          </label>
        </div>
        <div className="col-md-3 mb-3">
          <label for="medications" className="form-label">
            Medications
          </label>
          <input
            name="medications"
            onChange={handleChange}
            value={form.medications}
            type="text"
            className="form-control"
            id="medications"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="dosage" className="form-label">
            Dosage
          </label>
          <input
            name="dosage"
            onChange={handleChange}
            value={form.dosage}
            type="text"
            className="form-control"
            id="dosage"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="numOfTimes" className="form-label">
            Time(s)
          </label>
          <input
            name="numOfTimes"
            onChange={handleChange}
            value={form.numOfTimes}
            type="text"
            className="form-control"
            id="numOfTimes"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="prescribedFor" className="form-label">
            Prescribed for
          </label>
          <input
            name="prescribedFor"
            onChange={handleChange}
            value={form.prescribedFor}
            type="text"
            className="form-control"
            id="prescribedFor"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="medications2" className="form-label">
            Medications (2)
          </label>
          <input
            name="medications2"
            onChange={handleChange}
            value={form.medications2}
            type="text"
            className="form-control"
            id="medications2"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="dosage2" className="form-label">
            Dosage (2)
          </label>
          <input
            name="dosage2"
            onChange={handleChange}
            value={form.dosage2}
            type="text"
            className="form-control"
            id="dosage2"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="numOfTimes2" className="form-label">
            Time(s) (2)
          </label>
          <input
            name="numOfTimes2"
            onChange={handleChange}
            value={form.numOfTimes2}
            type="text"
            className="form-control"
            id="numOfTimes2"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="prescribedFor2" className="form-label">
            Prescribed for (2)
          </label>
          <input
            name="prescribedFor2"
            onChange={handleChange}
            value={form.prescribedFor2}
            type="text"
            className="form-control"
            id="prescribedFor2"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="medications3" className="form-label">
            Medications (3)
          </label>
          <input
            name="medications3"
            onChange={handleChange}
            value={form.medications3}
            type="text"
            className="form-control"
            id="medications3"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="dosage3" className="form-label">
            Dosage (3)
          </label>
          <input
            name="dosage3"
            onChange={handleChange}
            value={form.dosage3}
            type="text"
            className="form-control"
            id="dosage3"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="numOfTimes3" className="form-label">
            Time(s) (3)
          </label>
          <input
            name="numOfTimes3"
            onChange={handleChange}
            value={form.numOfTimes3}
            type="text"
            className="form-control"
            id="numOfTimes3"
          />
        </div>
        <div className="col-md-3 mb-3">
          <label for="prescribedFor3" className="form-label">
            Prescribed for (3)
          </label>
          <input
            name="prescribedFor3"
            onChange={handleChange}
            value={form.prescribedFor3}
            type="text"
            className="form-control"
            id="prescribedFor3"
          />
        </div>

        <div className="col-md-12 mb-3">
          <label className="form-label">
            <h3>Consent</h3>
            <p>
              Rabboni Support Services is committed to providing the highest
              level of therapeutic and safe environment for your client.
              Initialing beside each of the specialized activities listed below
              indicates that you are permitting your client to participate in
              such activities while in our program with the understandingthat
              our staff will take every measure possible to prevent risk of
              injury to your client.ACTIVITIES CONSENTRespite clientmay
              participatein a number of indoor and outdoor activities. Rabboni
              will provide constant supervision of all clientsin the program to
              minimize the potential for physical injuries. Initiating in this
              area indicates that you are permitting your clientto participate
              in general art, recreational, music, physicaland educational
              activities while in our care. __________ MEDICAL CONSENT knowingly
              and voluntarily authorize Rabboni to administer prescribed
              medication to client. I also authorize Rabboni to administer first
              aid, call an Ambulance or transport client to the hospital in case
              of an emergency. I understand that except in the case of a
              life-threatening emergency, I will be notified in advance of any
              medical problems requiring treatment.
            </p>
          </label>
        </div>

        <div className="col-md-12 mb-3">
          <label className="form-label">
            <h3>Signature</h3>
            <p>
              By typing my name below, I acknowledge that all information
              provided is accurate and complete.
            </p>
          </label>
          <input
            name="signature"
            onChange={handleChange}
            value={form.signature}
            type="text"
            className="form-control"
            id="signature"
          />
        </div>

        <div className="col-md-12 mb-3">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RabboniForm;
