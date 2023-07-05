import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Footer from '../Components/Footer';



 
function HomePage (){
    return (
      <>
      <Hero />
      <Services />
      <Footer />
      </>
    )
}
 
export default HomePage;