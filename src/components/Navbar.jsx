import React, { Component } from "react";
import NavbarItems from "./NavbarItems";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    asMarkAsOpen = () => {
        this.setState((state) => {
            return { isOpen: !state.isOpen };
        });
    }

    render() {
        const { screen } = this.props;
        const { isOpen } = this.state;
        if (screen === "laptop") {
            return (
                <div className="navbar">
                    <a href="https://www.mercedes-benz.io/" className="mercedes-io-logo">
                        <img
                            src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563439344/gradienty-io_qrgf6g.svg"
                            alt="mercedes-io-logo"
                        />
                    </a>
                    <div className="nav-link">
                        <NavbarItems />
                    </div>
                </div>
            );
        }
        return (
            <div className={isOpen ? "burger" : "navbar"}>
                <div className="burger-icons">
                    <a href="https://www.mercedes-benz.io/" className="mercedes-io-logo">
                        <img
                            src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563439344/gradienty-io_qrgf6g.svg"
                            alt="mercedes-io-logo"
                        />
                    </a>
                    <div className="burger-icon" role="presentation" onClick={this.asMarkAsOpen}>
                        <img
                            src="../assets/icons/bars.png"
                            alt="burger-icon"
                        />
                    </div>
                </div>
                {isOpen && (
                    <div className="burger-links" role="presentation" onClick={this.asMarkAsOpen}>
                        <NavbarItems />
                    </div>
                )}
            </div>
        );
    }
}

export default Navbar;
