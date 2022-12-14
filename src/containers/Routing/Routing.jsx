import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Routing.scss";

import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import NewPlayer from "../NewPlayer/NewPlayer";
import Eligibility from "../Eligibility/Eligibility";
import Squads from "../Squads/Squads";
import PlayerHub from "../PlayerHub/PlayerHub";
import Calendar from "../Calendar/Calendar";
import Gallery from "../Gallery/Gallery";
import Contacts from "../Contacts/Contacts";
import Archive from "../Archive/Archive";

const Routing = () => {
    return (
        <Router>
            <div className="router">
                <div className="router__nav">
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/newplayer" element={<NewPlayer />} />
                    <Route path="/eligibility" element={<Eligibility />} />
                    <Route path="/squads" element={<Squads />} />
                    <Route path="/playerhub" element={<PlayerHub />}/>
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/archive" element={<Archive />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Routing;
