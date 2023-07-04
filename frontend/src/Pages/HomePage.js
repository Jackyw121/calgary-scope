import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from '../Components/NavbarComp';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Footer from '../Components/Footer';


  const theme = createTheme({
    status: {
      danger: red[200],
    },
  });
 
function HomePage (){
    return (
      <>
      <NavbarComp />
      <Hero />
      <Services />
      <Footer />
      </>
    )
}
 
export default HomePage;