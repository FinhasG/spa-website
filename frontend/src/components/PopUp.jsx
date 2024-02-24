import React from 'react';

const PopUp = ({ onClose,onSubmit }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
    <div className="bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Book Now</h2>
      <form>
        <div className='flex flex-cols-2'>
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input type="text" id="name" name="name" className="border border-gray-400 rounded-md px-3 py-2 mb-4" required />
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input type="text" id="name" name="name" className="border border-gray-400 rounded-md px-3 py-2 mb-4" required />
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input type="text" id="name" name="name" className="border border-gray-400 rounded-md px-3 py-2 mb-4" required />
        
        </div>
        {/* Add more form fields here */}
        
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-4">Cancel</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default PopUp;