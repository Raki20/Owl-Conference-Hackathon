import React, { Component } from 'react';
import ScheduleTab from "./ScheduleTab";
import ScheduleDay from "./ScheduleDay";

const Schedule = ({ schedule }) => {
    console.log("day", schedule[0]);
    return (
        <section id="speakers">
            <h2>Schedule</h2>
            {
                schedule.map(day => (
                    <ScheduleTab dayTitle={day.date} key={day.date} />
                ))
            }
            <ScheduleDay />
        </section>
    );
};

export default Schedule;
