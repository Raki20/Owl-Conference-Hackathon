import React from "react";
// import facebooklogo from '../../assets/icons/facebooklogo'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <p> @ 2019 | Owl Conf | Stuttgart </p>
            </div>

            <div className="footer-icons">

                <div>
                    <a href="https://www.instagram.com/mercedesbenz.io/">
                        <img src="../../assets/icons/instagram-logo-white.png" alt="instagram icon" />
                    </a>
                </div>

                <div>
                    <a href="https://www.facebook.com/mercedesbenziogmbh/">
                        <img src="../../assets/icons/facebook.png" alt="facebook icon" />
                    </a>
                </div>

                <div>
                    <a href="https://twitter.com/mercedesbenzio">
                        <img src="../../assets/icons/twitter.png" alt="twitter icon" />
                    </a>
                </div>

                <div>
                    <a href="https://github.com/mercedesbenzio">
                        <img src="../../assets/icons/github.png" alt="github icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
