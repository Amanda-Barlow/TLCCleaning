import React from 'react';
import Sharon from '../assets/Sharon.jpeg';

function AboutMe(props) {
    return (
        <div className='Sharon'>
            <h2>TLC Cleaning Team</h2>
            <img src={Sharon} alt="Sharon" />
            <h3>Sharon Best is the Owner and Primary Contractor for TLC Cleaning.  Sharon has an MBA in Business Finance.  After a successful start to her finance career, Sharon chose to focus on her life as a full-time Mom. Sharon recently re-entered the workforce and has a passion for helping you feel safe and comfortable in your home or office setting through ensuring that your space is cleaned with a whole lot of TLC.  Please reach out if you want this level of high quality service.</h3>
        </div>
    );
}

export default AboutMe;
