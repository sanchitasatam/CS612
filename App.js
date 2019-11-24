import React from 'react';
import './App.css';
import Footer from './Footer.js'
import Header from './Header.js'
import Main from './Main.js'
import Nav from './Nav.js'

function App() {
  return (
    <div className="App">
      <Header />
      <div width='75%'>
      <Main />
      </div>
       <div width='25%'>
      <Nav />
      </div>

      <Footer />
    </div>
    
  );
}

export default App;
