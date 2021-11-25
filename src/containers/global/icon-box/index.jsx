import React from "react";
import PropTypes from "prop-types";
import IconBox from "../../../components/icon-box";
import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";

const ServicesBoxContainer = ({ classOption }) => {
    return (
        <section id="services">
            <div
                className={`feature-section  position-relative section-pt ${classOption}`}
            >
                <div className="container container-md ">
                    <div className="row g-0 align-items-center">
                        <div className="testimonial-wrap">
                            <SectionTitle
                                classOption="title-section"
                                title="Services"
                                subTitle="Services"
                            />
                        </div>
                        <div className="col-12">
                            <div id="grid" className="grid row mb-n7">
                                {HomeData[2].iconBox &&
                                    HomeData[2].iconBox.map((single, key) => {
                                        return (
                                            <IconBox key={key} data={single} />
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

ServicesBoxContainer.propTypes = {
    classOption: PropTypes.string,
};

ServicesBoxContainer.defaultProps = {
    classOption: "section-pb",
};

export default ServicesBoxContainer;
