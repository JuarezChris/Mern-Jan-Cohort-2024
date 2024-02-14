import React from 'react'

const Display = ({isActive, holidays}) => {

  const holidayContainer = {
    border:' 5px solid green',
    height: '300px',
    width: '500px',
    backgroundImage: `${isActive.image}`
  }

  return (
    <div>
        <div className='holidayContainer'>
          <img popovertarget="holidayImg" className='holidayImg' src={isActive.image} alt={isActive.holiday} />
          <h2 popover id="holidayImg">{isActive.holiday}</h2>
          <h2 popover id="holidayImg">{isActive.content}</h2>
        </div>
    </div>
  )
}

export default Display