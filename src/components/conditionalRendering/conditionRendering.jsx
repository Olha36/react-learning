import { useState } from 'react';
import { IoIosCloudy, IoIosRainy, IoIosSunny } from 'react-icons/io';
import { RiSnowyFill } from 'react-icons/ri';
import '../../css/conditionRendering.css';
import { FaHome } from "react-icons/fa";

export default function ConditionRendering() {
  let [weather, setWeather] = useState('');
  const handleClick = (e) => {
    setWeather(e.target.innerText);
  };
  return (
    <>
    <FaHome />
      <p>What is the weather like today?</p>
      <div className='weather-container'>
        <div className='sunny box'>
          <IoIosSunny />
          <button onClick={handleClick}>Sunny</button>
        </div>
        <div className='cloudy box'>
          <IoIosCloudy />
          <button onClick={handleClick}>Cloudy</button>
        </div>
        <div className='rainy box'>
          <IoIosRainy />
          <button onClick={handleClick}>Rainy</button>
        </div>
        <div className='snowy box'>
          <RiSnowyFill />
          <button onClick={handleClick}>Snowy</button>
        </div>

     
      </div>
      <p>The weather is {weather}</p>
    </>
  );
}
