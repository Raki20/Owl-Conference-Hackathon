import React from 'react';

const Talk = ({ talk }) => {
    return (
        <div>
            <p>
                {talk.starttime} | {talk.endtime}
            </p>
            
        </div>
    );
};

export default Talk;
