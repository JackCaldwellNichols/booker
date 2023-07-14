import React, {useState} from 'react'
import './header.scss'
import {faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom';


const Header = ({type}) => {
const nav = useNavigate()
const [show, setShow] = useState(false)
const [destination, setDestination] = useState("")
const [openOptions, setOpenOptions] = useState(false)
const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
})
const [date, setDate] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    ]);

const handleOption = (name, operation) => {
    setOptions((prev)=> {return {
        ...prev, [name]: operation === "inc" ? options[name] + 1 : options[name] - 1
    }})
}

const handleSearch = () => {
    nav('/hotels', {state: {destination, date, options}})
}
      

  return (
    <div className='header'>
        <div className={type === 'list' ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            { type !== 'list' &&
            <>
            <h1 className="headerTitle">A world of discounts. Code away!</h1>
            <p className='headerDesc'>
                Get rewarded for your travels - 10% discounts on all offers if you book through Booker.
            </p>
            <button className='headerButton'>Sign In / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} />
                    <input type="text" placeholder='Where are you going' className='headerSearchInput' onChange={e=>setDestination(e.target.value)}/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span className='headerSearchText' onClick={() => setShow(!show)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {show && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    minDate={new Date()}
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} />
                    <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="selector">
                                <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "dec")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("adult", "inc")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="selector">
                                <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "dec")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("children", "inc")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Rooms</span>
                            <div className="selector">
                                <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "dec")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("room", "inc")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button className='headerButton' onClick={handleSearch}>Search</button>
                 
                </div>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Header
