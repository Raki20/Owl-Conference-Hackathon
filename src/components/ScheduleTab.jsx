import React from 'react';

const ScheduleTab = ({ dayTitle, dayName, handleSelectTab }) => {
    const clickSelectDay = () => handleSelectTab(dayTitle);
    return (
        <div role="presentation" onClick={clickSelectDay}>
            <h2>{dayTitle}</h2>
        </div>
    );
};

export default ScheduleTab;
