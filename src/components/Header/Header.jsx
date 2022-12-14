import React from "react";

import "./Header.scss";

import saflag from "../../assets/images/saflag.jpg";


const Header = (props) => {
    const { title, background } = props;

    var image = background ? background : saflag;

    return (
        <div
            className="header"
            style={{ backgroundImage: `url(${image})` }}
        >
            <h1 className="header__title">{title}</h1>
        </div>
    );
};

export default Header;
