import React, { useState, useEffect } from 'react';
import '../assets/style/calendar.css';
import '../assets/style/globals.css';
import rightArrow from '../assets/images/rightArrow.svg'
import leftArrow from '../assets/images/leftArrow.svg'
import icon from '../assets/images/renewal01.svg';
import lockIcon from '../assets/images/renewal02.svg';
import ptarp from '../assets/images/ptrap.svg'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const events = {
  1: ['icon'],
  3: ['icon'],
  5: ['icon'],
  8: ['icon'],
  9: ['icon'],
  10: ['icon'],
  12: ['icon'],
  14: ['icon'],
  16: ['icon'],
  18: ['icon'],
  23: ['icon'],
  25: ['icon'],
  27: ['icon'],
};

const PaymentScheduleCalendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentWeek, setCurrentWeek] = useState(0);
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    generateCalendar(currentMonth, currentYear, currentWeek);
  }, [currentMonth, currentYear, currentWeek]);

  const generateCalendar = (month, year, week) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const startDay = week * 7 - firstDayOfMonth;
    let calendar = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = startDay + i + 1;
      if (currentDate > 0 && currentDate <= daysInMonth) {
        const dayOfWeek = (firstDayOfMonth + currentDate - 1) % 7;
        calendar.push({
          date: currentDate,
          dayOfWeek: daysOfWeek[dayOfWeek],
          isToday: currentDate === today.getDate() && month === today.getMonth() && year === today.getFullYear(),
          hasEvent: events[currentDate] || false // Check if there is an event for this day
        });
      } else {
        calendar.push(null);
      }
    }
    setCalendarDays(calendar);
  };

  const handleMonthChange = (e) => {
    setCurrentMonth(parseInt(e.target.value));
    setCurrentWeek(0);
    setCurrentDate(new Date(currentYear, parseInt(e.target.value), today.getDate()));
  };

  const prevWeek = () => {
    if (currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  const nextWeek = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const maxWeeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7);
    if (currentWeek < maxWeeks - 1) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  const renderEventIcons = (day, index, rowIndex) => {
    // Render the icon only on the fourth row (rowIndex === 3)
    if (events[day] && rowIndex === 3 || events[day] && rowIndex === 1) { // Only render for the fourth row
      return (
        <div>
          <img src={icon} alt="Event" style={{ width: '30px', height: '30px' }} />
        </div>
      );
    }
    return null;
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-between '>
        <p className='page-heading fs-22 fw-300'>Stay on track with our subscription scheduling feature, ensuring timely <br /> payments and effortless management.</p>
        <div className='mt-4' >
          <select className="form-select w-auto" id="month-select" value={currentMonth} onChange={handleMonthChange}>
            {monthNames.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="subs-pln-calendar-container " >

        <div className="border rounded rounded-3 box-shadow-custom bg-white" style={{ overflowX: 'scroll' }}>

          <div className="subs-pln-calendar-header d-flex justify-content-between align-items-center p-4">
            <div>
              <h3 id="current-date " className='dark-purple'>{today.getDate()} {monthNames[currentMonth]}, {currentYear} <sub className="ps-3 text-color fs-13 fw-400">Today</sub></h3>
            </div>
            <div className='d-flex align-item-center text-end'>
              <img src={leftArrow} alt='' width={20} height={25} onClick={prevWeek} className='cursor-pointer' />
              <img src={rightArrow} alt='' width={20} height={25} onClick={nextWeek} className='cursor-pointer' />
            </div>
          </div>

          {/* Calendar Body */}
          <table className="subs-pln-calendar-body w-100" id="calendar-body">
            <tbody>
              <tr>
                {calendarDays.map((day, index) => (
                  <td
                    key={index}
                    className={`${day ? '' : 'subs-pln-empty-cell'} border`}
                    style={{ width: '100px', height: '100px', textAlign: 'center' }}
                  >
                    {day && (
                      <div>
                        <strong className='text-color-light fw-500 fs-20'>{day.date}</strong><p className='fs-14 fw-300 text-color'>{day.dayOfWeek}</p>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
              {[...Array(4)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {calendarDays.map((day, index) => (
                    <td
                      key={index}
                      className={`${day ? '' : 'subs-pln-empty-cell'} border`}
                      style={{ width: '100px', height: '50px', textAlign: 'center' }}
                    >
                      {day && renderEventIcons(day.date, index, rowIndex)} {/* Display event icon only in the fourth row */}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='d-flex justify-content-between mt-4'>
        <h2 className='fs-25 fw-600 mt-1 mb-4'>6 January, 2022</h2>
        <div className='text-end'>
          <h2 className='fs-24 fw-600  mt-1 mb-0'>$24.98</h2>
          <p className='fs-18 fw-400 text-color-light m-0'> in upcoming bills</p>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-12 col-md-3 col-lg-2'>
          <div className='ps-2 py-3 calendar-card rounded-4'>
            <img src={lockIcon} alt='icon' width={40} height={40} />
            <p className='fs-16 fw-400 mt-5 mb-1'>Tresorly</p>
            <h2 className='fs-20 fw-600'>$24.98</h2>
          </div>
        </div>
        <div className='col-12 col-md-3 col-lg-2'>
          <div className='ps-2 py-3 calendar-card rounded-4 mt-4 mt-md-0'>
            <img src={ptarp} alt='icon' width={40} height={40} />
            <p className='fs-16 fw-400 mt-5 mb-1'>Profilio</p>
            <h2 className='fs-20 fw-600'>$18.99</h2>
          </div>
        </div>
        <div className='col-12 col-md-3 col-lg-2 '>
          <div className='ps-2 py-3 calendar-card rounded-4 mt-4 mt-md-0'>
            <img src={icon} alt='icon' width={40} height={40} />
            <p className='fs-16 fw-400 mt-5 mb-1'>SignNTrack</p>
            <h2 className='fs-20 fw-600'>$5.99</h2>
          </div>
        </div>
      </div>
      </div>

  );
};

export default PaymentScheduleCalendar;
