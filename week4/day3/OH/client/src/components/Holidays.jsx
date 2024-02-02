import {React} from 'react'

const Holidays = (props) => {
    const { holidays, setHolidays } = props


    const handleClick = (index) => {
        
    }

  return (
    <div>
        {
            holidays.map( (item, index) => (
                <button onClick={() => handleClick(index)} key={index}>{item.holiday}</button>
            ))
        }
    </div>
  )
}

export default Holidays