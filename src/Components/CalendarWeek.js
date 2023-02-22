import React from 'react'
import moment from 'moment';
import './CalendarWeek.css'

function getDaysFromMonth(ano, month) {
    const days = Array.from(Array(moment(ano + '-' + month).daysInMonth()), (_, i) => i + 1)
    return  days.map((day) => (
        <ul className='calendar-day-ul'key={day}>
            {day}
        </ul>
    ))
}

function CalendarWeek() {
    const meses = ['01']
  return (
    
      <div className='calendar-week'>
        {meses.map((mes) => (
            <div className='calendar-day'>
                {getDaysFromMonth('2023',mes)}
            </div>

        ))}
    </div>
   
  )
}

export default CalendarWeek
