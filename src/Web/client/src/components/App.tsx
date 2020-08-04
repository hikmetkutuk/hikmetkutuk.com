import React from 'react';

import Router from '../router/router';

import Navbar from "../components/layouts/Navbar";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
