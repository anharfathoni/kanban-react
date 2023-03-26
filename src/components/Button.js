import React from 'react';

function Button({ text = 'Submit', color = 'blue' }) {
  const getColorButton = () => {
    if (color === 'red') {
      return 'bg-red-700';
    } else if (color === 'yellow') {
      return 'bg-yellow-500';
    } else if (color === 'green') {
      return 'bg-green-600';
    }
    return 'bg-blue-600';
  };

  return (
    <button
      className={`w-full text-white py-1 px-4 rounded ${getColorButton()}`}
    >
      {text}
    </button>
  );
}

export default Button;
