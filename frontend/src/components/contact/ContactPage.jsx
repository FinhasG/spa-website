// import React from 'react'

// const ContactPage = () => {
//   return (
//     <div id='Contact' className='bg-orange-500 h-[670px] pt-5 border-b-[1px] border-b-black'>ContactPage</div>
//   )
// }

// export default ContactPage

import React,{useState} from 'react'
import Title from '../Layouts/Title'
import ContactLeft from './ContactLeft';
import image3 from '../../images/map.png'

const Contact = () => {
//   const [formData,setFormData]=useState([]);
//   const [username, setUsername] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");
// console.log(formData)
//   // ========== Email Validation start here ==============
//   // const emailValidation = () => {
//   //   return String(email)
//   //     .toLocaleLowerCase()
//   //     // .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
//   // };
//   // ========== Email Validation end here ================

//   const handleSend = (e) => {
//     e.preventDefault();
//     // if (username.value === "") {
//     //   setErrMsg("Username is required!");
//     // } else if (phoneNumber.value === "") {
//     //   setErrMsg("Phone number is required!");
//     // } 
//      if (email.value === "") {
//       setErrMsg("Please give your Email!");
//     // } else if (!emailValidation(email)) {
//     //   setErrMsg("Give a valid Email!");
//     } else if (subject.value === "") {
//       setErrMsg("Plese give your Subject!");
//     } else if (message.value === "") {
//       setErrMsg("Message is required!");
//     } else {
//       setSuccessMsg(
//         `Thank you dear ${username}, Your Messages has been sent Successfully!`
//       );
//       setErrMsg("");
//       setUsername("");
//       setPhoneNumber("");
//       setEmail("");
//       setSubject("");
//       setMessage("");
//     }
//   };

//   const handleChange = (e) => {
//     e.preventDefault();
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//  const formSubmit=async()=>{
// try{
//   const res=await fetch("/api/user/client-information",{
//     method:"POST",
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify({formData})
//   });
//   const data=await res.json();
//   console.log(data)
// } catch (error) {
//   console.log(error)
// }
// }


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
    // You can add your form submission logic here
  };



  return (
    // <section
    //   id="Contact"
    //   className="w-[1000px] h-[900px] mx-auto py-7 border-b-[1px] border-b-black bg-red-400 "
    // >
    //   <div className="flex justify-center items-center text-center">
    //     <Title title="CONTACT" des="Contact With Me" />
    //   </div>
    //   <div className="w-[800px] flex flex-row mx-auto items-center gap-20 ">
      
    //     <img src={image3} className="rounded-xl   w-[600px] h-[350px]" />
    //   </div>
    //   <div className='w-[400px] flex justify-between '>
    //     <div>
    //       <h1>titlekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkoklllllllllllllllllllkkkkk</h1>
    //     </div>
      // <div >
      //   <div className="w-[400px] h-auto flex flex-col lgl:flex-row justify-between">
         
      //     <div className="w-[400px] lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
      //       <form onSubmit={formSubmit} className="w-full flex flex-col gap-2 lgl:gap-4 py-2 lgl:py-5">
      //         {errMsg && (
      //           <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
      //             {errMsg}
      //           </p>
      //         )}
      //         {successMsg && (
      //           <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
      //             {successMsg}
      //           </p>
      //         )}
      //         <div className="w-full flex flex-col lgl:flex-row gap-7">
      //           {/* <div className="w-full lgl:w-1/2 flex flex-col gap-4">
      //             <p className="text-sm text-gray-400 uppercase tracking-wide">
      //               Your name
      //             </p>
      //             <input
      //               onChange={handleChange}
      //               id='name'
      //               className={`${
      //                 errMsg === "Username is required!" &&
      //                 "outline-designColor"
      //               } contactInput`}
      //               type="text"
      //             />
      //           </div>
      //           <div className="w-full lgl:w-1/2 flex flex-col gap-4">
      //             <p className="text-sm text-gray-400 uppercase tracking-wide">
      //               Phone Number
      //             </p>
      //             <input
      //               onChange={handleChange}
      //               id='phone number'
      //               className={`${
      //                 errMsg === "Phone number is required!" &&
      //                 "outline-designColor"
      //               } contactInput`}
      //               type="text"
      //             />
      //           </div> */}
      //         </div>
      //         <div className="flex flex-col gap-4">
      //           <p className="text-sm text-gray-400 uppercase tracking-wide">
      //             Email
      //           </p>
      //           <input
      //             onChange={handleChange}
      //             id='email'
      //             className={`${
      //               errMsg === "Please give your Email!" &&
      //               "outline-designColor"
      //             } contactInput`}
      //             type="email"
      //           />
      //         </div>
      //         <div className="flex flex-col gap-4">
      //           <p className="text-sm text-gray-400 uppercase tracking-wide">
      //             Subject
      //           </p>
      //           <input
      //             onChange={handleChange}
      //             id='subject'
      //             className={`${
      //               errMsg === "Plese give your Subject!" &&
      //               "outline-designColor"
      //             } contactInput`}
      //             type="text"
      //           />
      //         </div>
      //         <div className="flex flex-col gap-4">
      //           <p className="text-sm text-gray-400 uppercase tracking-wide">
      //             Message
      //           </p>
      //           <textarea
      //             onChange={handleChange}
      //             id='message'
      //             className={`${
      //               errMsg === "Message is required!" && "outline-designColor"
      //             } contactTextArea`}
      //             cols="30"
      //             rows="4"
      //           ></textarea>
      //         </div>
      //         <div className="w-full">
      //           <button
      //             onClick={handleSend}
      //             className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
      //           >
      //             Send Message
      //           </button>
      //         </div>
      //         {errMsg && (
      //           <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
      //             {errMsg}
      //           </p>
      //         )}
      //         {successMsg && (
      //           <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
      //             {successMsg}
      //           </p>
      //         )}
      //       </form>
      //     </div>
      //   </div>
      // </div>
    //   </div>
    // </section>
    <div  id="contact" className="w-[1200px] h-[1000px] mx-auto  border-b-[1px] border-b-black pt-20">
      <h1 className="text-2xl font-bold mb-4 text-center pt-1">Contact Us</h1>
      <img src={image3} className='w-[1000px] h-[400px] mx-auto' />
      <div className='flex justify-between mt-10 sm-flex-row'>
        <div className='flex flex-col mt-5 w-[600px] gap-14'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold mb-4  pt-1'>Location</h1>
            <p>Bole, Bora Kids Mall, 2nd floor, office number 213, Addis Ababa</p>
          </div>
          <div className='text-center'>
            <h1 className='text-2xl font-bold mb-4 text-center pt-1'>Email</h1>
            <p>Lulit@gmail.com</p>
          </div>
          <div className='text-center'>
            <h1 className='text-2xl font-bold mb-4  pt-1'>Call At</h1>
            <p>sdfsdfdsfdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
          </div>
        </div>
        <div className='w-[500px] m-7 border-solid border-2 border-indigo-600 rounded-xl'>
        <form onSubmit={handleSubmit} className="space-y-6 p-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
}

export default Contact