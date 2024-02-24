import React from 'react';

const Dropdown = ({ isOpen }) => {
  return (
    <div className={`absolute bg-white text-black border shadow-md rounded-xl mt-2 ${isOpen ? 'block' : 'hidden'}`}>
      <ul>
        <li className="py-2 px-4">Bath</li>
        <li className="py-2 px-4">Massage</li>
        <li className="py-2 px-4">Constultuncy</li>
      </ul>
    </div>
  );
};

export default Dropdown;