import React from 'react';

const Home = ({ about }) => {
    return (
        <section id="home">
            <div className="banner">
                <div className="banner-text">
                    <h1>OWL CONFERENCE</h1>
                    <h2>BRING IT OWL!</h2>
                </div>
                <h3>Powered by Mercedes-Benz.io</h3>
            </div>
            <div className="details-banner">
                <img
                    src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563369465/owl_rqpgyc.svg"
                    alt={about.name}
                />
                <p>{about.text.replace("Bring it owl. ", "")}</p>
            </div>
        </section>
    );
};

export default Home;
