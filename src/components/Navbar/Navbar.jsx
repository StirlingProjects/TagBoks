import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="navbar__heading">Menu</h1>
            <div className="navbar__links">
                <NavLink to="/" className="navbar__link">Home</NavLink>
                <NavLink to="/newplayer" className="navbar__link">New Player Zone</NavLink>
                <NavLink to="/eligibility" className="navbar__link">Eligibility</NavLink>
                <NavLink to="/squads" className="navbar__link">Squad List</NavLink>
                <NavLink to="/playerhub" className="navbar__link">Player Hub</NavLink>
                <NavLink to="/calendar" className="navbar__link">Training Calendar</NavLink>
                <NavLink to="/gallery" className="navbar__link">Gallery</NavLink>
                <NavLink to="/contacts" className="navbar__link">Contacts</NavLink>
                <NavLink to="/archive" className="navbar__link">Archive</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
