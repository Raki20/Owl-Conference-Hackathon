import React from 'react';

const ScheduleTab = ({ dayTitle }) => {
    const handleSelectDate = () => console.log(dayTitle);
    return (
        <div role="presentation" onClick={handleSelectDate}>
            <h2>{dayTitle}</h2>
        </div>
    );
};

export default ScheduleTab;
