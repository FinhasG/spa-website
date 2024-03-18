import React from 'react';
import Navbar from './Navbar';
import image from '../images/hair.jpeg';

const AboutPage = () => {
  return (
    // <div id='about' className='h-[700px] pt-5 border-b-[1px] border-b-black'>
    //   <h1 className='text-2xl font-bold mb-2 text-center pt-16'>About Us</h1>
    //   <div className="container mx-auto px-4 py-8">
    //   <div className="flex flex-wrap">
    //     {/* Image column */}
    //     <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
    //       <img
    //         src="your-image-url.jpg"
    //         alt="Contact Image"
    //         className="w-full h-auto"
    //       />
    //     </div>
    //     {/* Text column */}
    //     <div className="w-full md:w-1/2 px-4">
    //       <p className="text-xl text-gray-700">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //         suscipit quam quis mauris suscipit, sit amet dignissim dolor
    //         vulputate. Donec aliquet auctor viverra. Ut fringilla semper mi,
    //         sed feugiat nisi vehicula vel. Nullam eget mauris at nunc
    //         fringilla rhoncus.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    // </div>
    <div id='about' className='h-[700px] pt-8  w-[1000px] mx-auto'>
    <h1 className='text-2xl font-bold mb-2 text-center pt-16'>About Us</h1>
    <div className='flex justify-between mt-8 sm-flex-row gap-6'>
    <p class="mt-7 text-lg text-black font-semibold border rounded-2xl w-[400px]">
          Some description text. Some dummy text here. Welcome to Sling Academy.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className='m-7 border-solid  rounded-2xl'>
       <img src={image} className=' rounded-3xl h-[450px] w-[350px]' />
       </div>
      </div>
      </div>
  )
}

export default AboutPage