import React, { useState, useEffect } from "react";
import axios from 'axios'
// import Draggable from "react-draggable";

import "react-phone-number-input/style.css";

const PopUp = ({ onClose, onSubmit }) => {

  // form states
  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');
  const [email, setEmail]=useState('');
  const [service, setService]=useState('');
  const [message, setMessage]=useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // retrieved data state
  const [apiData, setApiData]=useState([]);

  useEffect(()=>{
    getData();
  },[])

  // submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    console.log(firstName,lastName,email,service,message,phoneNumber, date, time);

    // data to pass
    const formData = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Service: service,
      Message: message,
      PhoneNumber: phoneNumber,
      Date: date,
      Time: time
    }

    axios.post('https://script.google.com/macros/s/AKfycbw_FhyPHfiyUoNg27FL2Kx7Dc3SelPAGJxMmd7EZ8qmRFjO9CYg8WqaOdoUhpjj4XiS7g/exec', formData)
    .then(response => {
      console.log(response);
      // Reset form fields after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setService('');
      setMessage('');
      setPhoneNumber('');
      setDate('');
      setTime('');
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      // Handle error, e.g., display an error message to the user
    });
  }

  // getting data function
  const getData=()=>{
    axios.get('https://script.google.com/macros/s/AKfycbw_FhyPHfiyUoNg27FL2Kx7Dc3SelPAGJxMmd7EZ8qmRFjO9CYg8WqaOdoUhpjj4XiS7g/exec')
    .then(response=>{
      setApiData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle error, e.g., display an error message to the user
    });
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div
        className="bg-black bg-opacity-70 p-4 rounded-lg"
        style={{ width: "fit-content", height: "fit-content" }}
      >
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Book Now</h2>
          <form
            onSubmit={handleSubmit}
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <div className="grid grid-cols-2 gap-3">
              <label htmlFor="firstName" className="block mb-2">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="FirstName"
                onChange={(e)=>setFirstName(e.target.value)}
                value={firstName}
                className="border border-gray-400 rounded-md px-3 py-2 mb-3"
                required
              />
              <label htmlFor="lastName" className="block mb-2">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="LastName"
                onChange={(e)=>setLastName(e.target.value)}
                value={lastName}
                className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                required
              />
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                required
              />
              <label htmlFor="phoneNumber" className="block mb-2">
                Phone Number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="PhoneNumber"
                onChange={(e)=>setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                required
              />
              <label htmlFor="date" className="block mb-2">
                Select Date:
              </label>
              <input
                type="date"
                id="date"
                name="Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                required
              />
              <label htmlFor="time" className="block mb-2">
                Select Time:
              </label>
              <input
                type="time"
                id="time"
                name="Time"
                onChange={(e) => setTime(e.target.value)}
                value={time}
                className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                required
              />
              <label htmlFor="service" className="block mb-2">
                Select Service:
              </label>
              <select
                id="service"
                name="Service"
                onChange={(e)=>setService(e.target.value)}
                value={service}
                className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                required
              >
                <option value="">Select a service</option>
                <option value="Massage">Massage</option>
                <option value="Facial">Facial</option>
                <option value="Manicure">Manicure</option>
                <option value="Pedicure">Pedicure</option>
              </select>
              <label htmlFor="message" className="block mb-2">
                Message:
              </label>
              <textarea
                id="message"
                name="Message"
                onChange={(e)=>setMessage(e.target.value)}
                value={message}
                className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                onClick={onClose}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-4"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// // import Draggable from "react-draggable";

// import "react-phone-number-input/style.css";

// const PopUp = ({ onClose, onSubmit }) => {

//   // form states
//   const [firstName, setFirstName]=useState('');
//   const [lastName, setLastName]=useState('');
//   const [email, setEmail]=useState('');
//   const [service, setService]=useState('');
//   const [message, setMessage]=useState('');
//   const [phoneNumber, setPhoneNumber] = useState('')

//   // retrived data state
//   const [data, setData]=useState([]);

//   useEffect(()=>{
//     getData();
//   },[data])

//   // submit event
//   const handleSubmit=(e)=>{
//     e.preventDefault();
    
//     console.log(firstName,lastName,email,service,message,phoneNumber);

//     // our object to pass
//     const data = {
//       FirstName:firstName,LastName:lastName,Email:email,Service:service,Message:message,phoneNumber:phoneNumber
//     }
//     axios.post('https://script.google.com/macros/s/AKfycbw_FhyPHfiyUoNg27FL2Kx7Dc3SelPAGJxMmd7EZ8qmRFjO9CYg8WqaOdoUhpjj4XiS7g/exec',data).then(response=>{
//       // console.log(response);
      
//       setFirstName('');
//       setLastName('');
//       setEmail('');
//       setService('');
//       setMessage('');
//       setPhoneNumber('');
//     })
//   }

//   // getting data function
//   const getData=()=>{
//     axios.get('https://script.google.com/macros/s/AKfycbw_FhyPHfiyUoNg27FL2Kx7Dc3SelPAGJxMmd7EZ8qmRFjO9CYg8WqaOdoUhpjj4XiS7g/exec').then((response)=>{
//       setData(response.data);
//     })
//   }

//   // triggering function


//   return (
//     // <Draggable>
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
//       <div
//         className="bg-black bg-opacity-70 p-8 rounded-lg"
//         style={{ width: "fit-content", height: "fit-content" }}
//       >
     
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Book Now</h2>
//             <form
//               onSubmit={handleSubmit}
//               style={{ maxHeight: "80vh", overflowY: "auto" }}
//             >
//               <div className="grid grid-cols-2 gap-4">
//                 <label htmlFor="firstName" className="block mb-2">
//                   First Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="FirstName"
//                   onChange={(e)=>setFirstName(e.target.value)}
//                   value={firstName}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   required
//                 />
//                 <label htmlFor="lastName" className="block mb-2">
//                   Last Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="LastName"
//                   onChange={(e)=>setLastName(e.target.value)}
//                   value={lastName}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   required
//                 />

//                 <label htmlFor="email" className="block mb-2">
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="Email"
//                   onChange={(e)=>setEmail(e.target.value)}
//                   value={email}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   required
//                 />

//                 <label htmlFor="service" className="block mb-2">
//                   Select Service:
//                 </label>
//                 <select
//                   id="service"
//                   name="Service"
//                   onChange={(e)=>setService(e.target.value)}
//                   value={service}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   required
//                 >
//                   <option value="">Select a service</option>
//                   <option value="Massage">Massage</option>
//                   <option value="Facial">Facial</option>
//                   <option value="Manicure">Manicure</option>
//                   <option value="Pedicure">Pedicure</option>
//                 </select>

//                 <label htmlFor="message" className="block mb-2">
//                   Message:
//                 </label>
//                 <textarea
//                   id="message"
//                   name="Message"
//                   onChange={(e)=>setMessage(e.target.value)}
//                   value={message}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   rows="4"
//                 ></textarea>

//                 <label htmlFor="phoneNumber" className="block mb-2">
//                   Phone Number:
//                 </label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="PhoneNumber"
//                   onChange={(e)=>setPhoneNumber(e.target.value)}
//                   value={phoneNumber}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   required
//                 />
  
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   onClick={onClose}
//                   className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-4"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
   
//       </div>
//     </div>
//     // </Draggable>
//   );
// };

// export default PopUp;
// import React from "react";
// import Draggable from "react-draggable";

// import "react-phone-number-input/style.css";

// const PopUp = ({ onClose, onSubmit }) => {
//   // const [formData, setFormData] = useState({
//   //   FirstName: "",
//   //   LastName: "",
//   //   Email: "",
//   //   Service: "",
//   //   Message: "",
//   //   PhoneNumber: "",
//   // });

//   const handleSubmit = (event) => {
//     const formE = document.querySelector("form");
//     event.preventDefault();
//     // onSubmit(formData);
//     console.log("submitted");
   
//     const formData = new FormData(formE);
//     fetch(
//       "https://script.google.com/macros/s/AKfycbw_FhyPHfiyUoNg27FL2Kx7Dc3SelPAGJxMmd7EZ8qmRFjO9CYg8WqaOdoUhpjj4XiS7g/exec",
//       { method: "POST", body: formData, mode:"no-cors" }
//     );
   
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
//       <div
//         className="bg-black bg-opacity-70 p-8 rounded-lg"
//         style={{ width: "fit-content", height: "fit-content" }}
//       >
//         <Draggable>
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Book Now</h2>
//             <form
//               onSubmit={(event)=>handleSubmit(event)}
//               style={{ maxHeight: "80vh", overflowY: "auto" }}
//             >
//               <div className="grid grid-cols-2 gap-4">
//                 <label htmlFor="firstName" className="block mb-2">
//                   First Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="FirstName"
//                   // value={formData.FirstName}
//                   // onChange={handleChange}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   required
//                 />
//                 <label htmlFor="lastName" className="block mb-2">
//                   Last Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="LastName"
//                   // value={formData.LastName}
//                   // onChange={handleChange}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   required
//                 />

//                 <label htmlFor="email" className="block mb-2">
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="Email"
//                   // value={formData.Email}
//                   // onChange={handleChange}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   required
//                 />

//                 <label htmlFor="service" className="block mb-2">
//                   Select Service:
//                 </label>
//                 <select
//                   id="service"
//                   name="Service"
//                   // value={formData.Service}
//                   // onChange={handleChange}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   required
//                 >
//                   <option value="">Select a service</option>
//                   <option value="Massage">Massage</option>
//                   <option value="Facial">Facial</option>
//                   <option value="Manicure">Manicure</option>
//                   <option value="Pedicure">Pedicure</option>
//                 </select>

//                 <label htmlFor="message" className="block mb-2">
//                   Message:
//                 </label>
//                 <textarea
//                   id="message"
//                   name="Message"
//                   // value={formData.Message}
//                   // onChange={handleChange}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   rows="4"
//                 ></textarea>

//                 <label htmlFor="phoneNumber" className="block mb-2">
//                   Phone Number:
//                 </label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="PhoneNumber"
//                   // value={formData.Email}
//                   // onChange={handleChange}
//                   className="border border-gray-400 rounded-md px-3 py-2 mb-4"
//                   required
//                 />
  
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   onClick={onClose}
//                   className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-4"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </Draggable>
//       </div>
//     </div>
//   );
// };

// export default PopUp;
// import React, { useState } from 'react';
// import Draggable from 'react-draggable';

// const PopUp = ({ onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     service: '',
//     message: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
//       <div className="bg-black bg-opacity-70 p-8 rounded-lg" style={{ width: 'fit-content', height: 'fit-content' }}>
//         <Draggable>
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Book Now</h2>
//             <form onSubmit={handleSubmit} style={{ maxHeight: '80vh', overflowY: 'auto' }}>
//               <div className='grid grid-cols-2 gap-4'>
//                 <label htmlFor="firstName" className="block mb-2">First Name:</label>
//                 <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="border border-gray-400 rounded-md px-3 py-2 mb-4" required />

// <label htmlFor="lastName" className="block mb-2">Last Name:</label>
// <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="border border-gray-400 rounded-md px-3 py-2 mb-4" required />

//                 <label htmlFor="email" className="block mb-2">Email:</label>
//                 <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-400 rounded-md px-3 py-2 mb-4" required />

// <label htmlFor="service" className="block mb-2">Select Service:</label>
// <select id="service" name="service" value={formData.service} onChange={handleChange} className="border border-gray-400 rounded-md px-3 py-2 mb-4" required>
//   <option value="">Select a service</option>
//   <option value="Massage">Massage</option>
//   <option value="Facial">Facial</option>
//   <option value="Manicure">Manicure</option>
//   <option value="Pedicure">Pedicure</option>
// </select>

//                 <label htmlFor="message" className="block mb-2">Message:</label>
//                 <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="border border-gray-400 rounded-md px-3 py-2 mb-4" rows="4"></textarea>
// </div>
// <div className="flex justify-end">
//   <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
//   <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-4">Cancel</button>
// </div>
//             </form>
//           </div>
//         </Draggable>
//       </div>
//     </div>
//   );
// };

// export default PopUp;

// import React from 'react';

// const PopUp = ({ onClose,onSubmit }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
//     <div className="bg-white p-8 rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Book Now</h2>
//       <form>
//         <div className='flex flex-cols-2'>
//         <label htmlFor="name" className="block mb-2">Name:</label>
//         <input type="text" id="name" name="name" className="border border-gray-400 rounded-md px-3 py-2 mb-4" required />
//         <label htmlFor="name" className="block mb-2">Name:</label>
//         <input type="text" id="name" name="name" className="border border-gray-400 rounded-md px-3 py-2 mb-4" required />
//         <label htmlFor="name" className="block mb-2">Name:</label>
//         <input type="text" id="name" name="name" className="border border-gray-400 rounded-md px-3 py-2 mb-4" required />

//         </div>
//         {/* Add more form fields here */}

//         <div className="flex justify-end">
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
//           <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-4">Cancel</button>
//         </div>
//       </form>
//     </div>
//   </div>
//   );
// };

// export default PopUp;
