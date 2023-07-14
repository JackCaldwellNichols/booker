import React from 'react'
import './featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://cdn.pixabay.com/photo/2020/06/07/22/45/urban-5272365_1280.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cdn.pixabay.com/photo/2017/07/13/03/15/paris-2499022_1280.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitles">
            <h1>Paris</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_1280.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitles">
            <h1>New York</h1>
            <h2>123 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
