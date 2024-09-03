import React from 'react';
import '../../App.css';
import Cards from '../layouts/Cards';
import HeroSection from '../layouts/HeroSection';
import Footer from '../layouts/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
