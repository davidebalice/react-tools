import React,{useState} from 'react'
import {BrowserRouter,Routes,Route,Link,NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
  
    const prevMonth = () => {
      setCurrentDate(prevDate => {
        return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, prevDate.getDate());
      });
    }
  
    const nextMonth = () => {
      setCurrentDate(prevDate => {
        return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, prevDate.getDate());
      });
    }
  
    const renderCalendar = () => {
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
  
      const calendar = [];
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i);
        calendar.push(<div key={i}>{i}</div>);
      }
      return calendar;
    }
  return (
    
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
    >
    <div className="slider-area ">
        <div className="slider-height2 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-cap">
                            <h2>About me</h2>
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link exact to="/">Home</Link></li>
                                <li className="breadcrumb-item"><a href="#">About me</a></li> 
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div>
      <button onClick={prevMonth}>Previous Month</button>
      <button onClick={nextMonth}>Next Month</button>
      <div>{renderCalendar()}</div>
    </div>

    </motion.main>
  )
}


export default Calendar;