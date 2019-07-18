import React, { Component, Fragment } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const menuLinks = ["HOME", "SPEAKERS", "SCHEDULE", "INFO", "JOBS"];

class NavbarItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "HOME",
        };
    }

    handleActive = (navSelected) => {
        console.log(navSelected);
        this.setState({ active: navSelected });
    }

    render() {
        const { active } = this.state;
        return (
            <Fragment>
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
            </Fragment>
        );
    }
}

export default NavbarItems;
