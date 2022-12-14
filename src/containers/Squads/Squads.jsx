import React from "react";

import "./Squads.scss";

import Header from "../../components/Header/Header";

const Squads = () => {
    return (
        <div className="squads">
            <Header title={"Squads"} />
            <div className="squads__mxsinfo">Mixed seniors info</div>
            <div className="squads__mxs">Mixed seniors tiles</div>
            <div className="squads__addinfo">Additional players info</div>
            <div className="squads__additional">Additional players tiles</div>
        </div>
    );
};

export default Squads;
