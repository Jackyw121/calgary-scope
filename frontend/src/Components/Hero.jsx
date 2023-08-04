import React from 'react'
import { Row, Col, Container} from 'react-bootstrap'
import main_hero_photo from './Assets/hero-photo.png';
import { Translation, useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthContext } from '../Hooks/useAuthContext';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Hero = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            {user && (<Link to = '/profile'>
            <button
              type="button"
              className="btn btn-lg btn-outline-dark px-4 me-md-2"
              style={{backgroundColor: 'white', color: '#e7492e'}}
            >
              {t('self_assessment')}
            </button>
            </Link>)}
            {!user && (<Link to = '/login'>
            <button
              type="button"
              className="btn btn-lg btn-outline-dark px-4 me-md-2"
              style={{backgroundColor: 'white', color: '#e7492e'}}
            >
              {t('self_assessment')}
            </button>
            </Link>)}
            <button onClick ={handleOpen}
              type="button"
              className="btn btn-lg px-4"
              style={{backgroundColor: '#e7492e', color: 'white'}}
            >
              {t('book_consultation')}
            </button>
            <Modal         
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
              <Box sx ={style}>
             <Typography id="modal-modal-title" variant="h6" component="h2">
             CONTACTS
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <br></br>219 18 Street S.E. Calgary, AB T2E 6J5
          <br></br>info@calgaryscope.org
          <br></br>Phone: (403) 509-0200
          <br></br>Fax: (403) 291-4087
          </Typography>
            </Box>
              </Modal> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero