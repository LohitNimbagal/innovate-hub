import React, { useState } from 'react';

const Dropdown = ({ options, onSelect, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="text-black text-xs border py-1 px-2 rounded m-1 flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          {/* Arrow icon */}
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>


      </div>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right--1 w-40 rounded-md bg-white z-10 shadow-lg border">
          <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <button
                key={option}
                className="text-black w-full text-xs py-2 px-2 rounded m-1 flex hover:bg-gray-200"
                onClick={() => handleOptionClick(option)}
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
