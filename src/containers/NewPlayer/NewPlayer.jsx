import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

import "./NewPlayer.scss";

import saflag from "../../assets/images/saflag.jpg";

const NewPlayer = () => {
    return (
        <div className="newplayer">
            <Navbar />
            <Header title={"New Player Zone"} background={saflag} />
        </div>
    );
};

export default NewPlayer;
