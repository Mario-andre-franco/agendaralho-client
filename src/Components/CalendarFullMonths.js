import React from 'react'
import './CalendarFullMonths.css';
import CalendarWeek from './CalendarWeek';


const CalendarFullMonths = () => {
    const meses = ['Janeiro']
  return (
    <div className='calendar-full'>
        {meses.map((mes) => (
            <div className='calendar-month'>
                {mes}
                <CalendarWeek/>
            </div>
                
        ))}
    </div>
  )
}

export default CalendarFullMonths
