import React from 'react';
import Talk from "./Talk";

const ScheduleDay = ({ dayTimeslot }) => {
    return (
        <div>
            {
                dayTimeslot.map(talk => (
                    <Talk talk={talk} key={talk.starttime} />
                ))
            }
        </div>
    );
};

export default ScheduleDay;
