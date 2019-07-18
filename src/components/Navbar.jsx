import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const menuLinks = ["HOME", "SPEAKERS", "SCHEDULE", "INFO", "JOBS"];

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "HOME"
        };
    }

    handleActive = (navSelected) => {
        console.log(navSelected);
        this.setState({ active: navSelected });
    }

    render() {
        const { active } = this.state;
        return (
            <div className="navbar">
                <a href="https://www.mercedes-benz.io/" className="mercedes-io-logo">
                    <img
                        src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563439344/gradienty-io_qrgf6g.svg"
                        alt="mercedes-io-logo"
                    />
                </a>
                <div className="nav-link">
                    {menuLinks.map(link => (
                        <AnchorLink
                            key={link}
                            onClick={() => this.handleActive(link)}
                            offset={() => 75}
                            className={active === link ? "isActive" : ""}
                            href={`#${link.toLowerCase()}`}
                        >
                            {link}
                        </AnchorLink>
                    ))}
                    {/* <AnchorLink
                        onClick={() => this.handleActive("Home")}
                        offset={() => 75}
                        className={active ? "isActive" : ""}
                        href="#home"
                    >
                        HOME
                    </AnchorLink>
                    <AnchorLink
                        onClick={() => this.handleActive("Speakers")}
                        offset={() => 75}
                        className={active ? "isActive" : ""}
                        href="#speakers"
                    >
                        SPEAKERS
                    </AnchorLink>
                    <AnchorLink
                        onClick={() => this.handleActive("Schedule")}
                        offset={() => 75}
                        className={active ? "isActive" : ""}
                        href="#schedule"
                    >
                        SCHEDULE
                    </AnchorLink>
                    <AnchorLink
                        onClick={() => this.handleActive("Info")}
                        offset={() => 75}
                        className={active ? "isActive" : ""}
                        href="#info"
                    >
                        INFO
                    </AnchorLink>
                    <AnchorLink
                        onClick={() => this.handleActive("Jobs")}
                        offset={() => 75}
                        className={active ? "isActive" : ""}
                        href="#jobs"
                    >
                        JOBS
                    </AnchorLink> */}
                </div>
            </div>
        );
    }
};

export default Navbar;
