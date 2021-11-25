import React from "react";
import Intro from "../../../components/intro";
import HomeData from "../../../data/home.json";

const IntroContainer = () => {
    return (
        <section id="home">
            <div className="section position-relative">
                <div className="hero-shape2" />
                <Intro data={HomeData[0].slider[0]} />
            </div>
        </section>
    );
};

export default IntroContainer;
