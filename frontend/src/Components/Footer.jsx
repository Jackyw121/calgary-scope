import React from 'react'
import { Row, Col, Container} from 'react-bootstrap';
import facebook_logo from './Assets/facebook.svg';
import maps_logo from './Assets/maps.svg';
import linkedin_logo from './Assets/linkedin.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-white text-center text-lg-start" style={{backgroundColor: '#e7492e'}}>
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">{t('help')}</h5>

              <p>
                {t('footer')}
              </p>
              <div className="mt-4">
                <a type="button" className="btn btn-floating btn-sm">
                  <img src={facebook_logo} alt="facebook" />
                </a>

                <a type="button" className="btn btn-floating btn-sm">
                  <img src={maps_logo} alt="maps" />
                </a>

                <a type="button" className="btn btn-floating btn-sm">
                  <img src={linkedin_logo} alt="linkedin" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-4">Contacts</h5>

              <ul className="fa-ul" style={{marginLeft: '1.65em'}}>
                <li className="mb-3">
                  <span className="fa-li"></span>
                  <span className="ms-2">
                    219 18 Street S.E.
                    Calgary, AB T2E 6J5
                  </span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"></span>
                  <span className="ms-2">
                    info@calgaryscope.org
                  </span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"></span>
                  <span className="ms-2">
                    Phone: (403) 509-0200
                  </span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"></span>
                  <span className="ms-2">
                    Fax: (403) 291-4087
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>

              <ul className="fa-ul" style={{marginLeft: '1.65em'}}>
                <li className="mb-3">
                  <span className="fa-li"></span>
                  <span className="ms-2">
                    Mon - Friday:	8:30AM - 4:30PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
        >
          © 2023 Copyright
        </div>
      </footer>
  )
}

export default Footer