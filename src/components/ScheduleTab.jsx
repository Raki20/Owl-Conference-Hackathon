import React from 'react';

const ScheduleTab = ({ dayTitle, dayName, handleSelectTab }) => {
    const clickSelectDay = () => handleSelectTab(dayTitle);
    return (
        <div role="presentation" onClick={clickSelectDay}>
            <h3>{dayTitle}</h3>
        </div>
    );
};

export default ScheduleTab;
