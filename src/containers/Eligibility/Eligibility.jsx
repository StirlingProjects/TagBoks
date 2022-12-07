import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

import "./Eligibility.scss";

import saflag from "../../assets/images/saflag.jpg"

const Eligibility = () => {
    return (
        <div className="eligibility">
            <Navbar />
            <Header title={"Eligibility"} background={saflag} />
        </div>
    );
};

export default Eligibility;
