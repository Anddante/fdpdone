import React from "react";
import PropTypes from "prop-types";
import BoxAbout from "../../../components/box-about";
import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";

const ExperienceContainer = ({ classOption }) => {
    return (
        <section id="experience">
            <div
                className={`feature-section section-pt position-relative ${classOption}`}
            >
                <div className="container">
                    <div className="row g-0 align-items-center">
                        <div className="col mx-auto mb-3 text-center">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="Our experience"
                                title="Our experience"
                            />
                        </div>

                        <div className="col-12">
                            <div id="grid" className="grid row mb-n7">
                                {HomeData[3].aboutBox &&
                                    HomeData[3].aboutBox.map((single, key) => {
                                        return (
                                            <BoxAbout key={key} data={single} />
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

ExperienceContainer.propTypes = {
    classOption: PropTypes.string,
};

ExperienceContainer.defaultProps = {
    classOption: "section-pb",
};

export default ExperienceContainer;
