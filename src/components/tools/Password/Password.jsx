import React, { useState } from 'react'
import './styles.css'

import notVisible from './notVisible.png'
import isVisible from './visible.png'

const Password = ({ id, name }) => {

    const [visible, setVisible] = useState(false)

    return (
        <div className={`password-input input-wrap ${visible ? 'visible' : ''}`}>
            <input type={visible ? 'password' : 'text'} name={name} id={id}/>
            <button className="toggle">
                {visible && <img src={isVisible} alt='visible'/>}
                {!visible && <img src={notVisible} alt='not visible'/>}
            </button>

            <svg width="51" height="48" viewBox="0 0 51 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 48H9L51 28.5V0H0V48Z" fill="#212121"/>
            </svg>
        </div>
    )
}

export default Password