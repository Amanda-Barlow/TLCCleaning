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
        <ul>A great new way to brighten your home with TLC cleaning is WALL WASHING. Contact me about my pricing on how we can safely wash your walls and baseboards ! "Cleaning is Caring" ❤️</ul>
        <Link to="/Contact"><h3>Contact us for more details</h3></Link>
    </div>
  );
}

export default Services;
