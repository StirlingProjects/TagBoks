import React from "react";

import "./Calendar.scss";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

const Calendar = () => {
    return (
        <div className="calendar">
            <Navbar />
            <Header title="Training Calendars" />
        </div>
    );
};

export default Calendar;
