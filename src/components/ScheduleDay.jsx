import React, { Fragment } from 'react';
import Talk from "./Talk";

const ScheduleDay = ({ dayTimeslot }) => {
    return (
        <Fragment>
            {
                dayTimeslot.map(talk => (
                    <Talk talk={talk} key={talk.starttime} />
                ))
            }
        </Fragment>
    );
};

export default ScheduleDay;
