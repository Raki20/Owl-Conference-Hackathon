import React from 'react';

const Info = ({ location }) => {
    return (
        <section id="info" className="info-details">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.1301768260223!2d9.164825315072!3d48.779404979279796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db38f723ed55%3A0x440041d26fe115b2!2sMercedes-Benz.io+GmbH!5e0!3m2!1spt-PT!2spt!4v1563527490541!5m2!1spt-PT!2spt"
                className="map"
                frameBorder="0"
                title="map"
                style={{ border: 0 }}
                allowFullScreen
            />
            <div className="info-down">
                <h2>Venue</h2>
                <h3>{location.name}</h3>
                <p>{location.street}</p>
                <p>{location.city} | {location.country}</p>
            </div>
        </section>
    );
};

export default Info;
