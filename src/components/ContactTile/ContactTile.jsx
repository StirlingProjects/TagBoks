import React from "react";

import "./ContactTile.scss";

import stdImg from "../../assets/images/stdPlayerImg.png";

const ContactTile = ({imageUrl, name, role, contact}) => {

    var image = imageUrl ? imageUrl : stdImg;

    return <div className="contacttile">
        <div className="contacttile__img">
            <img src={image} alt={name} />
        </div>
        <div className="contacttile__name">{name}</div>
        <div className="contacttile__role">{role}</div>
        {contact ? <div className="contacttile__contact">{contact}</div> : ""}
        </div>;
};

export default ContactTile;
