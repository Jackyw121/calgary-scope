import { useTranslation } from 'react-i18next';
import './AboutUs.css';
import Footer from '../Components/Footer';

function AboutUs (){
  const { t } = useTranslation();


 return <address>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<h1>{t('about_us_title')}</h1>

<div class="color-container1">
<h2 class="space">{t('story_title')}</h2>
  <p></p>
  <p class="container-text1">{t('about_us1')}
  </p>
  <p class="container-text1">                                                                                                                                                                                 
  {t('about_us2')}
  </p> 
  <p class="container-text1">  
  {t('about_us3')}
  </p>
  <p class="container-text1">  
  {t('about_us4')}
  </p>
  </div>
  <div class="color-container2">
  <h2 class="space">{t('mission_statement')}</h2>
  <p class="container-text2">
  {t('mission_statement_text')}
  </p>
  </div>
  <div class="color-container3">
  <h2 class="space">{t('guiding_principle')}</h2>
  <ul>
    <p class="container-text3">{t('principle1')}</p>
    <p class="container-text3">{t('principle2')}</p>
    <p class="container-text3">{t('principle3')}</p>
    <p class="container-text3">{t('principle4')}</p>
    <p class="container-text3">{t('principle5')}</p>
  </ul>
  </div>
  <Footer />
        </address>
}

 
export default AboutUs;
