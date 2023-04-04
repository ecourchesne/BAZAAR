import React from 'react'

const Plus = ({ left, top, right, bottom, z}) => {
    return (
        <svg style={{ left, right, top, bottom, zIndex: z }}  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.09091H10V5.90909H0V4.09091Z" fill="black"/>
            <path d="M4.09091 10L4.09091 7.94752e-08L5.90909 0L5.90909 10H4.09091Z" fill="black"/>
        </svg>
    )
}

export default Plus
