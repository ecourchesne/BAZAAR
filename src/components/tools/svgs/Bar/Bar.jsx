import React from 'react'

const Bar = ({left, top, right, bottom, z, type, rotate }) => {
  
  rotate = rotate ? '90deg' : ''  

  return (
    <>
        {type === 'one' && <svg style={{left, right, top, bottom, zIndex: z, rotate}} width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="22" height="4" fill="black"/>
        </svg>
        }


        {type === 'two' && <svg style={{left , right , top , bottom , zIndex: z}} width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="22" height="2" fill="black"/>
        </svg>
        }
    </>
  )
}

export default Bar
