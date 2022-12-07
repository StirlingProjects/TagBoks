import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

import "./NewPlayer.scss";

const NewPlayer = () => {
    return (
        <div className="newplayer">
            <Navbar />
            <Header />
            New Player
        </div>
    );
};

export default NewPlayer;
