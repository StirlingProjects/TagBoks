import React from "react";

import "./Squads.scss";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

import saflag from "../../assets/images/saflag.jpg";

const Squads = () => {
    return (
        <div className="squads">
            <Navbar />
            <Header title={"Squads"} background={saflag} />
        </div>
    );
};

export default Squads;
