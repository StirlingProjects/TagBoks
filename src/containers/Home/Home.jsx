import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import saflag from "../../assets/images/saflag.jpg";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Header title={"TagBoks - MXS"} background={saflag} />
            <div className="body">
                <div className="home__left">
                    The TagBOKS UK Squad is affiliated with Tag South Africa,
                    the SA Rugby Union (SARU) and the International Tag
                    Federation. The aim of the TagBOKS UK Squad is to represent
                    Tag South Africa, SARU and, by extension, South Africa at
                    the highest levels of Tag Rugby. We aim to provide an
                    enjoyable environment for tag rugby players at all levels in
                    the UK and Ireland, and a pathway to represent our country.
                    We aim to have teams representing South Africa in all
                    leagues across the UK where practicable, upholding the
                    standards and behaviours that have been set. TagBOKS UK run
                    regular training sessions and events that are open to all
                    players with South African heritage and to promote the sport
                    of Tag Rugby. We have some of the best coaches in the tag
                    community, providing support and development for all
                    players. Please explore the contents of the this webpage and
                    feel free to contact the coaches and management team if you
                    have any questions.
                </div>
                <div className="home__right"></div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
