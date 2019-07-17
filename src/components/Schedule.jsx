import React from 'react';
import ScheduleTab from "./ScheduleTab";

const Schedule = ({ schedule }) => {
    return (
        <section id="speakers">
            <h2>Schedule</h2>
            {schedule.map(day => (
                <ScheduleTab dayTitle={day.date} />
            ))
            }
        </section>
    );
};

export default Schedule;
