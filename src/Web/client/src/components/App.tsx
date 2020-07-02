import React from 'react';

import Router from '../router/router';

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
