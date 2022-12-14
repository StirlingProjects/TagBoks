import React from "react";

import "./PlayerTile.scss";

import stdImg from "../../assets/images/stdPlayerImg.png";

const PlayerTile = (props) => {
    const { imageUrl, name, twenty1, twenty2, caps } = props;

    var image = imageUrl ? imageUrl : stdImg;

    return (
        <div className="playertile">
            <img src={image} alt={name} />
            <div className="playertile__name">{name}</div>
            <div className="playertile__2021">2021: {twenty1}</div>
            <div className="playertile__2022">2022: {twenty2}</div>
            <div className="playertile__caps">Internaltional Caps: {caps}</div>
        </div>
    );
};

export default PlayerTile;
