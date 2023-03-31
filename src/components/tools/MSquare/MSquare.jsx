import React from 'react'
import './styles.css'

const MSquare = ({ type, children }) => {

    
    return (
        <div className={`m-square ${type ? type : ''}`}>
            <div className="text">
                {children}
            </div>

            {type === 'one' && <>
                <svg id='one' width="280" height="75" viewBox="0 0 280 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="280" height="75" fill="#FFF500"/>
                </svg>
                <svg id='two' width="223" height="68" viewBox="0 0 223 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="223" height="68" fill="#FFF500"/>
                </svg>
                <svg id='three' width="96" height="31" viewBox="0 0 96 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="96" height="31" fill="#FFF500"/>
                </svg>

                <svg id='four' width="22" height="3" viewBox="0 0 22 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="22" height="3" fill="black"/>
                </svg>
                <svg id='five' width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="5" height="5" fill="black"/>
                </svg>
            </>}

            {type === 'two' && <>
                <svg id='one' width="320" height="99" viewBox="0 0 320 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="320" height="99" fill="#FFF500"/>
                </svg>
                <svg id='two' width="350" height="49" viewBox="0 0 350 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="350" height="49" fill="#FFF500"/>
                </svg>
                <svg id='three' width="99" height="25" viewBox="0 0 99 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="99" height="25" fill="#FFF500"/>
                </svg>
                <svg id='four' width="115" height="35" viewBox="0 0 115 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="115" height="35" fill="white"/>
                </svg>

                <svg id='five' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4.09091H10V5.90909H0V4.09091Z" fill="black"/>
                    <path d="M4.09091 10L4.09091 7.94753e-08L5.90909 0L5.90909 10H4.09091Z" fill="black"/>
                </svg>
                <svg id='six' width="22" height="3" viewBox="0 0 22 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="22" height="3" fill="black"/>
                </svg>
                <svg id='seven' width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="5" height="5" fill="black"/>
                </svg>
            </>}

            {type === 'three' && <>
                <svg id='one' width="320" height="99" viewBox="0 0 320 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="320" height="99" fill="#FFF500"/>
                </svg>
                <svg id='two' width="99" height="25" viewBox="0 0 99 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="99" height="25" fill="#FFF500"/>
                </svg>
                <svg id='three' width="79" height="49" viewBox="0 0 79 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="79" height="49" fill="#FFF500"/>
                </svg>
                <svg id='four' width="24" height="79" viewBox="0 0 24 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.4532e-06 79L0 1.04907e-06L24 0L24 79H3.4532e-06Z" fill="white"/>
                </svg>

                <svg id='five' width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="5" height="5" fill="black"/>
                </svg>
                <svg id='six' width="22" height="3" viewBox="0 0 22 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="22" height="3" fill="black"/>
                </svg>
                <svg id='seven' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4.09091H10V5.90909H0V4.09091Z" fill="black"/>
                    <path d="M4.09091 10L4.09091 7.94753e-08L5.90909 0L5.90909 10H4.09091Z" fill="black"/>
                </svg>
            </>}


        </div>
    )
}

export default MSquare

// props
// type: 1 to 4, selects the button 