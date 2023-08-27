import React from 'react';
import Current from './Current';
import './HomePage.css';
import CleanOffice from '../assets/CleanOffice.jpeg'

function HomePage(props) {
  return (
    <div>
        <Current />   
   <img src={CleanOffice} alt="Clean Office" />
</div>
  );
}

export default HomePage;
