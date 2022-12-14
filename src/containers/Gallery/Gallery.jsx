import React from "react";

import "./Gallery.scss";

import Header from "../../components/Header/Header";

const Gallery = () => {
    return (
        <div className="gallery">
            <Header title="Gallery"  />
            <div className="gallery__sliders">
                This is where the sliding sections for the images will go
            </div>
        </div>
    );
};

export default Gallery;
