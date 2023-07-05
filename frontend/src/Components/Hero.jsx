import React from 'react'
import { Row, Col, Container} from 'react-bootstrap'
import main_hero_photo from './Assets/hero-photo.png';
import { Translation, useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="container col-xxl-12 px-4 py-5 border-bottom">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-12 col-sm-12 col-lg-6">
          <img
            src={main_hero_photo}
            className="d-block mx-lg-auto img-fluid"
            alt="Hero Photo"
            width="700"
            height="500"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-3 fw-bold text-body-emphasis lh-3 mb-3">
            Calgary <br />
            SCOPE Society
          </h1>
          <p className="lead">
            {t('homepage_1')}
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-outline-dark px-4 me-md-2"
              style={{backgroundColor: 'white', color: '#e7492e'}}
            >
              {t('self_assessment')}
            </button>
            <button
              type="button"
              className="btn btn-lg px-4"
              style={{backgroundColor: '#e7492e', color: 'white'}}
            >
              {t('book_consultation')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero