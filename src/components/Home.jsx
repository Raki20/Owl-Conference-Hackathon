import React from 'react';

const Home = ({ about }) => {
    return (
        <section id="home">
            <div className="banner">
                <img src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563374771/owl-dark_rltqp4.png" alt="Owl Conference Logo" />
            </div>
            <div className="details-banner">
                <div className="details-banner-top">
                    <h2>Owl Conf 2019</h2>
                    <p>{about.text.replace("Bring it owl. ", "")}</p>
                </div>
                <div className="details-banner-bottom">
                    <p>First Edition</p>
                    <p><span role="img" aria-label="circle" style={{ fontSize: '10px' }}>⚫</span></p>
                    <p>Stuttgart</p>
                    <p><span role="img" aria-label="circle" style={{ fontSize: '10px' }}>⚫</span></p>
                    <p>12 & 13 October</p>
                </div>
            </div>
        </section>
    );
};

export default Home;
