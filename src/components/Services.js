import React from 'react';
import { Link } from 'react-router-dom';

function Services(props) {
  return (
    <div>
      <h2>Services We Offer</h2>
        <ul>Deep Cleaning</ul>
        <ul>Monthly Cleaning</ul>
        <ul>Holiday Preparations</ul>
        <ul>Corporate Cleaning</ul>
        <Link to="/Contact"><h3>Contact us for more details</h3></Link>
    </div>
  );
}

export default Services;
