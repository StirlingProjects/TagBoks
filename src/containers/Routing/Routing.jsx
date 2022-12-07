import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import NewPlayer from "../NewPlayer/NewPlayer";
import Eligibility from "../Eligibility/Eligibility";
import Squads from "../Squads/Squads";
// Player hub import
import Calendar from "../Calendar/Calendar";
import Gallery from "../Gallery/Gallery";
import Contacts from "../Contacts/Contacts";
import Archive from "../Archive/Archive";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/newplayer" element={<NewPlayer />} />
                <Route path="/eligibility" element={<Eligibility />} />
                <Route path="/squads" element={<Squads />} />
                {/* // Route for calendar hub*/}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/archive" element={<Archive />} />
            </Routes>
        </Router>
    );
};

export default Routing;
