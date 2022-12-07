import React from "react";

import "./Header.scss";

const Header = (props) => {
    const { title, background } = props;
    return (
        <div
            className="header"
            style={{ backgroundImage: `url(${background})` }}
        >
            <h1 className="header__title">{title}</h1>
        </div>
    );
};

export default Header;
