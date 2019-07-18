import React from 'react';

const Talk = ({ talk }) => {
    return (
        <div className="schedule-details-talk">
            <p className="talk-hours">
                {talk.starttime} | {talk.endtime}
            </p>
            <div className="talk-description">
                <p>
                    {`${talk.topic.charAt(0).toUpperCase()}${talk.topic.slice(1)}`}
                </p>
                <hr />
                <p className="talk-description-room">
                    {`${talk.venue.charAt(0).toUpperCase()}${talk.venue.slice(1)}`}
                </p>
            </div>
        </div>
    );
};

export default Talk;
