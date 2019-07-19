import React from 'react';

const Jobs = ({ jobs }) => {
    return (
        <section id="jobs" className="jobs">
            <div className="jobs-description">
                <h2>Opportunities</h2>
                <h3>{jobs.headline}</h3>
                <p>{jobs.text}</p>
                <a href={jobs.link} target="_blank" rel="noopener noreferrer">
                    <button type="button">
                        View job opportunities
                    </button>
                </a>
            </div>
            <div className="jobs-logo">
                <img
                    src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563374772/gm_pltizn.png"
                    alt="mercedes-io-logo"
                />
            </div>
        </section>
    );
};

export default Jobs;
