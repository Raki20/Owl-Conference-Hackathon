import React from "react";
// import facebooklogo from '../../assets/icons/facebooklogo'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <p> @ 2019 | Owl Conf | Stuttgart</p>
            </div>

            <div className="footer-icons">

                <div>
                    <a href="https://www.instagram.com/mercedesbenz.io/" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/dc4zctxhv/image/upload/v1563532840/instagram-logo-white_ph8ojb.png" alt="instagram icon" />
                    </a>
                </div>

                <div>
                    <a href="https://www.facebook.com/mercedesbenziogmbh/" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/dc4zctxhv/image/upload/v1563532840/facebook_ska4bg.png" alt="facebook icon" />
                    </a>
                </div>

                <div>
                    <a href="https://twitter.com/mercedesbenzio" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/dc4zctxhv/image/upload/v1563532840/twitter_nrqdmn.png" alt="twitter icon" />
                    </a>
                </div>

                <div>
                    <a href="https://github.com/mercedesbenzio" target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/dc4zctxhv/image/upload/v1563532840/github_ro38xe.png" alt="github icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
