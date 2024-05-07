import React from 'react';
import { PiToggleLeftFill , PiToggleRightFill} from "react-icons/pi";


const ToggleButton = ({ onClick, isDarkMode }) => {
  return (
    <button onClick={onClick} className="toggle-button">
      {isDarkMode ? <PiToggleLeftFill className='icons'/> : <PiToggleRightFill className='icons'/>}
    </button>
  );
};

export default ToggleButton;