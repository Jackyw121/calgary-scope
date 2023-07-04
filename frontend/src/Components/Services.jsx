import React from 'react'
import { Row, Col, Container, Feature} from 'react-bootstrap'

const Services = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="m-4 text-center fs-1">Services</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
          >
          </div>
          <h3 className="fs-2 text-body-emphasis">KIDS & YOUNG ADULTS</h3>
          <p>
            The Gateways program supports families raising children with developmental disabilities who are experiencing additional barriers (mental health, multiple children with disabilities, low income and/or English as a second language) in accessing resources and services in the community.
          </p>
          <a href="#" className="icon-link">
            learn more
          </a>
        </div>
        <div className="feature col">
          <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
          >
          </div>
          <h3 className="fs-2 text-body-emphasis">ADULTS</h3>
          <p>
            The Community Support Team (CST) supports adults (18+) with a dual diagnosis to live fulfilling lives in the community. Providing wrap-around, person-centered supports to clients based on their needs, goals, interests and relationships, CST specializes in supporting people with mental health challenges and complex support needs to live and thrive.
          </p>
          <a href="#" className="icon-link">
            learn more
          </a>
        </div>
        <div className="feature col">
          <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
          >
          </div>
          <h3 className="fs-2 text-body-emphasis">SENIORS</h3>
          <p>
            The Journeys team supports older adults (45+) with developmental disabilities as well as age-related and mental health diagnoses in both Calgary and in Ridgestone Lodge in Black Diamond. The program provides support based on the needs and wants of each individual client, from 5 hours of day support per week to a 24 hour staffed residence.
          </p>
          <a href="#" className="icon-link">
            learn more
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services