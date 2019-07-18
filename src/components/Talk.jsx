import React from 'react';

const Talk = ({ talk }) => {
    return (
        <div className="schedule-details-talk">
            <p className="talk-hours">
                {talk.starttime} | {talk.endtime}
            </p>
            <div className="talk-description">
                <p>{talk.topic}</p>
                <hr />
                <p className="talk-description-room">{talk.venue}</p>
            </div>
        </div>
    );
};

export default Talk;
