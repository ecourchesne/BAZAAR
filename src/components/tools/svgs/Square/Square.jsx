import React from 'react'

const Square = ({left, top, right , bottom , z}) => {
  return (
    <svg style={{left, right, top , bottom ,zIndex: z}} width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="5" height="5" fill="black"/>
    </svg>
  )
}

export default Square
