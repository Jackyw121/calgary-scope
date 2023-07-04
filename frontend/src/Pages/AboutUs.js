import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

function AboutUs (){
  const { t } = useTranslation();

  const languages = [
    { value: '', text: "Languages" },
    { value: 'en', text: "English" },
    { value: 'fr', text: "French"}
]

const [lang, setLang] = useState('');
 
// This function put query that helps to
// change the language
const handleChange = e => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
}

 return <address>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<h1>About Us</h1>

<div class="color-container1">
<h2 class="space">Our Story</h2>
  <p></p>
  <p class="container-text1">{t('about_us1')}
  </p>
  <p class="container-text1">                                                                                                                                                                                 
  Individuals served by SCOPE enjoy a flexible program and service that is customized according to their own preferences and needs. One size does not fit all, and every individual is entitled to pursue their dreams and goals on their terms. Person-centred planning is the cornerstone of SCOPE’s values and services.
  </p> 
  <p class="container-text1">  
  SCOPE is a leader in the community of disability services, specializing in creative ways of helping individuals live full lives in a community setting regardless of their level of need. Its services are frequently sought for a smaller proportion of individuals who have had repeated unsuccessful placements or chronic hospitalization.
  </p>
  <p class="container-text1">  
  We believe that the best services are based on a relationship; our role is to create services that work for the individual.
  </p>
  </div>
  <div class="color-container2">
  <h2 class="space">Mission Statement</h2>
  <p class="container-text2">
  "The Calgary SCOPE Society works in alliance with people with disabilities, their families and friends, and other community members to understand problems and create solutions to personal and social justice issues."</p>
  </div>
  <div class="color-container3">
  <h2 class="space">Guiding Principles</h2>
  <ul>
    <p class="container-text3">1. Respect for diversity and choice</p>
    <p class="container-text3">2. Valued roles and opportunities within community life</p>
    <p class="container-text3">3. Careful listening, learning, and responsiveness</p>
    <p class="container-text3">4. Positive, caring approaches, and relationships</p>
    <p class="container-text3">5. Collective reflection, evaluation, and dialogue</p>
  </ul>
  </div>
  
        </address>
}

 
export default AboutUs;