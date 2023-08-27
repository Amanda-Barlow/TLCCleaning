import React from 'react';

function Contact(props) {
  return (
    <div className='contactme'>
      <h3>
        I'm out here doing it! TLC Cleaning! Deep cleaning and regular housekeeping.
        Message or call for a free consultation. 928-241-8325. "Cleaning is Caring" ❤️
      </h3>
      <h2><u>Contact Us</u></h2>
      <h4><b>Call or Text:</b> 928-241-8325</h4>
      <h4><b>Friend (sharon.r.green.3) on Facebook</b></h4>
      <h4><b>PM for a Quote Today!</b></h4>
    </div>
  );
}

export default Contact;

// import React, { useState, useRef } from 'react';
// import emailjs from  '@emailjs/browser';
// import 'react-loaders';
// import Loader from 'react-loaders';


// emailjs.init('')
// const Contact = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const refForm = useRef(null);

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await emailjs.sendForm(
//         'service_dno42yk', 
//         'template_kxamkn2', 
//         e.target, 
//         '5JM5_hQii-VjdpfIb');

//         console.log('SUCCESS!', response.status, response.text);
//         alert('Message successfully sent!');
//         window.location.reload(false);
//       } catch (error) {
//         console.error('FAILED...', error);
//         alert('Failed to send the message, please try again');
//       } finally {
//         setIsLoading(false);
//       };
//   };

//   return (
//     <div>
//       <h3>
// I'm out here doing it! TLC Cleaning! Deep cleaning and regular housekeeping. Message or call for a free consultation. <br></br><b>928-241-8325</b> <br></br>"Cleaning is Caring" ❤️</h3>

//       <h2>Contact Us</h2>
//          <div className="contact-page">
//         <div className="contact-form">
//           <form ref={refForm} onSubmit={sendEmail}>
//             <ul>
//               <li className="half">
//                 <input type="text" name="name" placeholder="Name" required />
//               </li>
//               <li className="half">
//                 <input type="email" name="email" placeholder="Email" required />
//               </li>
//               <li>
//                 <input placeholder="Subject" type="text" name="subject" required />
//               </li>
//               <li>
//                 <textarea placeholder="Message" name="message" required></textarea>
//               </li>
//               <li>
//                 <input type="submit" className="flat-button" value="SEND" />
//               </li>
//             </ul>
//           </form>
//         </div>
//       </div>
//       {isLoading && <Loader type="pacman" />}
//     </div>
//   );
// };

// export default Contact;