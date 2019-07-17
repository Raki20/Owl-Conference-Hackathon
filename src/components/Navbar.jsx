import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="conf-logo" src=""></img>
            <AnchorLink href='#home'>HOME</AnchorLink>
            <AnchorLink href='#schedule'>SCHEDULE</AnchorLink>
            <AnchorLink href='#speakers'>SPEAKERS</AnchorLink>
            <AnchorLink href='#info'>INFO</AnchorLink>
            <AnchorLink href='#jobs'>JOBS</AnchorLink>
            <img className="mercedesIo-logo" src=""></img>
        </div>
    );
};

export default Navbar;
