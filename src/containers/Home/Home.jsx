import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

import saflag from "../../assets/images/saflag.jpg"

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Header title={"TagBoks - MXS"} background={saflag} />
        </div>
    );
};

export default Home;
