import React from 'react';

const Home = ({ about }) => {
    return (
        <section id="home">
            <div className="banner">
                <img src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563374771/owl-dark_rltqp4.png" alt="Owl Conference Logo" />
            </div>
            <div className="details-banner">
                <div className="details-banner-top">
                    <h2>Bring it Owl</h2>
                    <h3>12 & 13 October</h3>
                    <p>{about.text.replace("Bring it owl. ", "")}</p>
                </div>
                <div className="details-banner-bottom">
                    <p>First Edition</p>
                    <p><span role="img" aria-label="circle" style={{ fontSize: '10px', padding: '0 25px' }}>⚫</span></p>
                    <p>Stuttgart</p>
                </div>
            </div>
        </section>
    );
};

export default Home;
