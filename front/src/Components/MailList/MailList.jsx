import React from 'react'
import './mailList.scss'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc"></span>
        <div className="mailInputcontainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default MailList
