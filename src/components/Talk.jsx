import React from 'react';

const Talk = ({ talk }) => {
    return (
        <div>
            <p>
                {talk.starttime} | {talk.endtime}
            </p>
            <p>{talk.topic}</p>
            <p>{talk.venue}</p>
        </div>
    );
};

export default Talk;
