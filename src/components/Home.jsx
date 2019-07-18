import React from 'react';

const Home = ({ about }) => {
    return (
        <section id="home">
            <div className="banner">
                <img src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563374771/owl-dark_rltqp4.png" alt="Owl Conference Logo" />
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
