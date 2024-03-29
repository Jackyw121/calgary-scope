import React from "react";

function FormContainer(props) {
  return (
    <div className="container bg-light p-5  rounded-5">
        <h1 className="display-4 text-center mb-22">
          RABBONI SUPPORT SERVICES APPLICATION FOR SERVICE
        </h1>

        <form className="row g-3">
          <div className="col-md-12 mb-3">
            <label className="form-label"><h3>Client Information</h3> </label>
          </div>
          <div className="col-md-6 mb-3">
            <label for="parentFirstName" className="form-label">Parent/Guardian First Name</label>
            <input value={props.pFirstName} disabled type="text" className="form-control" id="parentFirstName" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="parentLastName" className="form-label">Parent/Guardian Last Name</label>
            <input value={props.pLastName} disabled type="text" className="form-control" id="parentLastName" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="homePhone" className="form-label">Home Phone</label>
            <input value={props.homeNumber} disabled type="tel" className="form-control" id="homePhone" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="cellPhoneNumber" className="form-label">Cellphone</label>
            <input value={props.cellPhoneNumber} disabled type="tel" className="form-control" id="cellPhoneNumber" />
          </div>

          <div className="col-md-12 mb-3">
            <label for="email" className="form-label">Email</label>
            <input value={props.email} disabled type="email" className="form-control" id="email" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="streetAddress" className="form-label">Address</label>
            <input value={props.streetAddress} disabled type="text" className="form-control" id="streetAddress" />
          </div>
          <div className="col-md-2 mb-3">
            <label for="city" className="form-label">City</label>
            <input value={props.city} disabled type="text" className="form-control" id="city" />
          </div>
          <div className="col-md-2 mb-3">
            <label for="province" className="form-label">Province</label>
            <input value={props.province} disabled type="text" className="form-control" id="province" />
          </div>
          <div className="col-md-2 mb-3">
            <label for="postalCode" className="form-label">Postal Code</label>
            <input value={props.postalCode} disabled type="text" className="form-control" id="postalCode" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="childFirstName" className="form-label">Child First Name</label>
            <input value={props.childFirstName} disabled type="text" className="form-control" id="childFirstName" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="childLastName" className="form-label">Child Last Name</label>
            <input value={props.childLastName} disabled type="text" className="form-control" id="childLastName" />
          </div>
          <div className="col-md-12 mb-3">
            <label for="childID" className="form-label">Child ID#</label>
            <input value={props.childID} disabled placeholder="Child ID" type="text" className="form-control" id="childID" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="gender" className="form-label">Male/Female</label>
            <input value={props.gender} disabled type="text" className="form-control" id="gender" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="age" className="form-label">Age</label>
            <input value={props.age} disabled type="text" className="form-control" id="age" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="birthDate" className="form-label">Birth Date (M/D/Y)</label>
            <input value={props.birthDate} disabled type="text" className="form-control" id="birthDate" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="livesAtHome" className="form-label">Lives at home (Y/N)</label>
            <input value={props.livesAtHome} disabled type="text" className="form-control" id="livesAtHome" />
          </div>
          <div className="col-md-12 mb-3">
            <label for="typeOfService" className="form-label">Type of Service Applying for</label>
            <input value={props.typeOfService} disabled type="text" className="form-control" id="typeOfService" />
          </div>
          <div className="col-md-12 mb-3">
            <label for="albertaHealthCardNumber" className="form-label">Alberta Health Card Number</label>
            <input value={props.albertaHealthCardNumber} disabled type="text" className="form-control" id="albertaHealthCardNumber"
            />
          </div>


          <div className="col-md-12 mb-3">
            <label for="diagnoses" className="form-label"
              ><h3>Diagnoses/Behaviours/Concerns</h3>
              <p>
                List & detail the diagnosis and/or functional loss or impairment
                of the child and how this is affecting the family and
                contributing to the need for service. Mandatory supporting
                documentation of the diagnosis and/or the professional
                assessment must be attached to the application.
              </p></label>
            <textarea value={props.diagnoses} disabled className="form-control" id="diagnoses" rows="3" />
          </div>



          <div className="col-md-12 mb-3">
            <label className="form-label"
              ><h3>Personal Care & Activities</h3>
            </label>
          </div>
          <div className="col-md-5 mb-3">
            <label for="eating" className="form-label mr-3">Eating</label>
            <select value={props.eating} disabled className="col-md-8 form-select float-right" aria-label="Eating" id="eating">
              <option selected>select here...</option>
              <option value="1">Independent</option>
              <option value="2">Prompts or reminders required</option>
              <option value="3">Some supports required</option>
              <option value="4">Full supports required</option>
            </select>
          </div>
          <div className="col-md-5 mb-3">
            <label for="dressing" className="form-label mr-3">Dressing</label>
            <select value={props.dressing} disabled className="col-md-8 form-select float-right" aria-label="Dressing" id="dressing">
              <option selected>select here...</option>
              <option value="1">Independent</option>
              <option value="2">Prompts or reminders required</option>
              <option value="3">Some supports required</option>
              <option value="4">Full supports required</option>
            </select>
          </div>
          <div className="col-md-5 mb-3">
            <label for="toileting" className="form-label mr-3">Toileting</label>
            <select value={props.toileting} disabled className="col-md-8 form-select float-right" aria-label="Toileting" id="toileting">
              <option selected>select here...</option>
              <option value="1">Independent</option>
              <option value="2">Prompts or reminders required</option>
              <option value="3">Some supports required</option>
              <option value="4">Full supports required</option>
            </select>
          </div>
          <div className="col-md-5 mb-3">
            <label for="activities" className="form-label mr-3">Activities</label>
            <select value={props.activities} disabled className="col-md-8 form-select float-right" aria-label="Activities" id="activities">
              <option selected>select here...</option>
              <option value="1">Independent</option>
              <option value="2">Prompts or reminders required</option>
              <option value="3">Some supports required</option>
              <option value="4">Full supports required</option>
            </select>
          </div>
          <div className="col-md-5 mb-3">
            <label for="speechAndHearing" className="form-label mr-3">Speech/Hearing</label>
            <select value={props.speechAndHearing} disabled className="col-md-8 form-select float-right" aria-label="Speech/Hearing" id="speechAndHearing">
              <option selected>select here...</option>
              <option value="1">Independent</option>
              <option value="2">Prompts or reminders required</option>
              <option value="3">Some supports required</option>
              <option value="4">Full supports required</option>
            </select>
          </div>
          <div className="col-md-5 mb-3">
            <label for="vision" className="form-label mr-3">Vision</label>
            <select value={props.vision} disabled className="col-md-8 form-select float-right" aria-label="Vision" id="vision">
              <option selected>select here...</option>
              <option value="1">Independent</option>
              <option value="2">Prompts or reminders required</option>
              <option value="3">Some supports required</option>
              <option value="4">Full supports required</option>
            </select>
          </div>
          <div className="col-md-5 mb-3">
            <label for="mobility" className="form-label mr-3">Mobility</label>
            <select value={props.mobility} disabled className="col-md-8 form-select float-right" aria-label="Mobility" id="mobility">
              <option selected>select here...</option>
              <option value="1">Independent</option>
              <option value="2">Prompts or reminders required</option>
              <option value="3">Some supports required</option>
              <option value="4">Full supports required</option>
            </select>
          </div>


          <div className="col-md-12 mb-3">
            <label for="specialInstructions" className="form-label"
              ><h3>Special Instructions</h3>
              <p>
                Please describe any details that will assist the provider in
                meeting the individual needs of the client while they are in our
                respite care. Are there any bedtime routines or concerns that
                Rabboni Support Services should be aware of? Are there any
                eating habits, allergies, preferences that the provider should
                be aware of? Is there a safety plan or special supervision
                requirement that Rabboni should be aware of?
              </p></label>
            <textarea value={props.specialInstructions} disabled className="form-control" id="specialInstructions" rows="3" />
          </div>



          <div className="col-md-12 mb-3">
            <label className="form-label"><h3>Medical Information</h3> </label>
          </div>
          <div className="col-md-6 mb-3">
            <label for="primaryDoctor" className="form-label">Primary Doctor</label>
            <input value={props.primaryDoctor} disabled type="text" className="form-control" id="primaryDoctor" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="clinic" className="form-label">Clinic</label>
            <input value={props.clinic} disabled type="text" className="form-control" id="clinic" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="clinicAddress" className="form-label">Clinic Address</label>
            <input value={props.clinicAddress} disabled type="text" className="form-control" id="clinicAddress" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="clinicPhone" className="form-label">Clinic Phone #</label>
            <input value={props.clinicPhone} disabled type="text" className="form-control" id="clinicPhone" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="emergencyTransport" className="form-label">In case of an emergency, can client be transported to nearest
              hospital?</label>
            <input value={props.emergencyTransport} disabled type="text" className="form-control" id="emergencyTransport" />
          </div>
          <div className="col-md-6 mb-3">
            <label for="emergencyOption" className="form-label">If no, where?</label>
            <input value={props.emergencyOption} disabled type="text" className="form-control" id="emergencyOption" />
          </div>


          <div className="col-md-12 mb-3">
            <label className="form-label"><h3>Current Medications</h3> </label>
          </div>
          <div className="col-md-3 mb-3">
            <label for="medications" className="form-label">Medications</label>
            <input value={props.medications} disabled type="text" className="form-control" id="medications" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="dosage" className="form-label">Dosage</label>
            <input value={props.dosage} disabled type="text" className="form-control" id="dosage" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="numOfTimes" className="form-label">Time(s)</label>
            <input value={props.numOfTimes} disabled type="text" className="form-control" id="numOfTimes" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="prescribedFor" className="form-label">Prescribed for</label>
            <input value={props.prescribedFor} disabled type="text" className="form-control" id="prescribedFor" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="medications2" className="form-label">Medications (2)</label>
            <input value={props.medications2} disabled type="text" className="form-control" id="medications2" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="dosage2" className="form-label">Dosage (2)</label>
            <input value={props.dosage2} disabled type="text" className="form-control" id="dosage2" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="numOfTimes2" className="form-label">Time(s) (2)</label>
            <input value={props.numOfTimes2} disabled type="text" className="form-control" id="numOfTimes2" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="prescribedFor2" className="form-label">Prescribed for (2)</label>
            <input value={props.prescribedFor2} disabled type="text" className="form-control" id="prescribedFor2" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="medications3" className="form-label">Medications (3)</label>
            <input value={props.medications3} disabled type="text" className="form-control" id="medications3" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="dosage3" className="form-label">Dosage (3)</label>
            <input value={props.dosage3} disabled type="text" className="form-control" id="dosage3" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="numOfTimes3" className="form-label">Time(s) (3)</label>
            <input value={props.numOfTimes3} disabled type="text" className="form-control" id="numOfTimes3" />
          </div>
          <div className="col-md-3 mb-3">
            <label for="prescribedFor3" className="form-label">Prescribed for (3)</label>
            <input value={props.prescribedFor3} disabled type="text" className="form-control" id="prescribedFor3" />
          </div>


          <div className="col-md-12 mb-3">
            <label className="form-label"
              ><h3>Consent</h3>
              <p>
                Rabboni Support Services is committed to providing the highest
                level of therapeutic and safe environment for your client.
                Initialing beside each of the specialized activities listed
                below indicates that you are permitting your client to
                participate in such activities while in our program with the
                understandingthat our staff will take every measure possible to
                prevent risk of injury to your client.ACTIVITIES CONSENTRespite
                clientmay participatein a number of indoor and outdoor
                activities. Rabboni will provide constant supervision of all
                clientsin the program to minimize the potential for physical
                injuries. Initiating in this area indicates that you are
                permitting your clientto participate in general art,
                recreational, music, physicaland educational activities while in
                our care. __________ MEDICAL CONSENT knowingly and voluntarily
                authorize Rabboni to administer prescribed medication to client.
                I also authorize Rabboni to administer first aid, call an
                Ambulance or transport client to the hospital in case of an
                emergency. I understand that except in the case of a
                life-threatening emergency, I will be notified in advance of any
                medical problems requiring treatment.
              </p>
            </label>
          </div>
          

          <div className="col-md-12 mb-3">
            <label className="form-label"
              ><h3>Signature</h3>
              <p>
                By typing my name below, I acknowledge that all information
                provided is accurate and complete.
              </p>
            </label>
            <input value={props.signature} disabled type="text" className="form-control" id="signature" />
          </div>
        </form>
    </div>
  );
}

export default FormContainer;