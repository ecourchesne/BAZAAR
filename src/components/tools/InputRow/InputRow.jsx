import React from 'react'
import './styles.css'

const InputRow = ({ children }) => {

    const names = ['one', 'two', 'three', 'four']

    return (
        <div className={`input-row ${names[children.length - 1]}`}>
            {children}
        </div>
    )
}

export default InputRow
