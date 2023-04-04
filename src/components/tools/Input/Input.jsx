import React, { useState } from "react";
import "./styles.css";

import notVisible from './notVisible.png'
import isVisible from './visible.png'

const Input = ({ id, label, placeholder, optional, type, down }) => {
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(type === 'password' ? false : true)

  const handleFocusLoss = (e) => {
    if (e.target.value === "" || e.target.value === null) setDone(false);
    else setDone(true);
  };

  const handleVisiblity = (e) => {
    e.preventDefault()

    setVisible((prev) => !prev)
  }

  return (
    <div className={`input-wrap ${done ? "done" : ""} ${down ? 'down' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={visible ? 'text' : 'password'}
        id={id}
        name={id}
        placeholder={placeholder}
        onFocus={() => setDone(true)}
        onBlur={handleFocusLoss}
        required={optional ? false : true}
        autoComplete="new-password"
      />
      {type === 'password' && 
        <button tabIndex='-1' className="toggle" onClick={handleVisiblity}>
          {visible && <img src={isVisible} alt='visible'/>}
          {!visible && <img src={notVisible} alt='not visible'/>}
        </button>
      }

      <svg width="51" height="48" viewBox="0 0 51 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 48H9L51 28.5V0H0V48Z" fill="#212121"/>
      </svg>
    </div>
  );
};

export default Input;
