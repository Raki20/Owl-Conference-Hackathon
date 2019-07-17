import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="conf-logo" src="" alt="" />
            <AnchorLink offset={() => 75} href="#home">HOME</AnchorLink>
            <AnchorLink offset={() => 75} href="#speakers">SPEAKERS</AnchorLink>
            <AnchorLink offset={() => 75} href="#schedule">SCHEDULE</AnchorLink>
            <AnchorLink offset={() => 75} href="#info">INFO</AnchorLink>
            <AnchorLink offset={() => 75} href="#jobs">JOBS</AnchorLink>
            <img className="mercedesIo-logo" src="" alt="" />
        </div>
    );
};

export default Navbar;
