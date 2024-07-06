import React, { useEffect } from 'react';
import axios from 'axios';
import { AuthProvider, useAuth } from '../AuthContext';
import Navbar from '../Navbar';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

const HomePage = () => {

  const { login } = useAuth();


  return (
   <>
      <Navbar />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
      </>
  );
};

export default HomePage;
