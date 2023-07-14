import React, {useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import './list.scss'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../Components/SearchItem/SearchItem'


const List = () => {
const location = useLocation()
const [show, setShow] = useState(false)
const [destination, setDestination] = useState(location.state.destination)
const [date, setDate] = useState(location.state.date)
const [options, setOptions] = useState(location.state.options);



  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} className='destinationInput'/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setShow(!show)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {show &&<DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={date}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsItemOptions">
                <div className="lsOptionItem">
                  <span className='lsSearchOptionText'>Min price <small>per night</small> </span>
                  <input type="number" className='lsOptionInput' min={1} style={{width: '50px'}}/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsSearchOptionText'>Max price <small>per night</small></span>
                  <input type="number" className='lsOptionInput' min={1} style={{width: '50px'}}/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsSearchOptionText' >Adults</span>
                  <input type="number" className='lsOptionInput' placeholder={options.adult} min={1} style={{width: '50px'}}/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsSearchOptionText' >Children</span>
                  <input type="number" className='lsOptionInput' placeholder={options.children} min={0} style={{width: '50px'}}/>
                </div>
                <div className="lsOptionItem">
                  <span className='lsSearchOptionText' >Rooms</span>
                  <input type="number" className='lsOptionInput' placeholder={options.room} min={1} style={{width: '50px'}}/>
                </div>
              </div>
            </div>
            <button className='listSearchButton'>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
