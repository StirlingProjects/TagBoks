import React from "react";

import "./Calendar.scss";

import saflag from "../../assets/images/saflag.jpg";

import Header from "../../components/Header/Header";

const Calendar = () => {
    return (
        <div className="calendar">
            <Header title="Training Calendars" background={saflag}/>
            <div className="calendar__info">Calendar info</div>
            <div className="calendar__calendars">Calendars</div>
            <div className="calendar__locations">Maps of training locations</div>
        </div>
    );
};

export default Calendar;
