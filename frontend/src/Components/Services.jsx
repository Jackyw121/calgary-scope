import React from 'react'
import { Row, Col, Container, Feature} from 'react-bootstrap'
import { Translation, useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="m-4 text-center fs-1">{t('services_title')}</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
          >
          </div>
          <h3 className="fs-2 text-body-emphasis">{t('kids_title')}</h3>
          <p>
            {t('kids_adults')}
          </p>
          <a href="#" className="icon-link">
          {t('learn_more')}
          </a>
        </div>
        <div className="feature col">
          <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
          >
          </div>
          <h3 className="fs-2 text-body-emphasis">{t('adults_title')}</h3>
          <p>
          {t('adults')}
          </p>
          <a href="#" className="icon-link">
          {t('learn_more')}
          </a>
        </div>
        <div className="feature col">
          <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
          >
          </div>
          <h3 className="fs-2 text-body-emphasis">{t('seniors_title')}</h3>
          <p>
          {t('seniors')}
          </p>
          <a href="#" className="icon-link">
          {t('learn_more')}
                    </a>
        </div>
      </div>
    </div>
  )
}

export default Services