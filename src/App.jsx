import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CompanyLogos from './components/CompanyLogos';
import Services from './components/Services';
import WorkingProcess from './components/WorkingProcess';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <CompanyLogos />
      <Services />
      <WorkingProcess />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
