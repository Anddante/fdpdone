import React from "react";
import SectionTitle from "../../../components/section-title";
import ServiceBox from "../../../components/service-box";
import ServiceData from "../../../data/service.json";

const CasesListContainer = () => {
    return (
        <section id="cases">
            <div className="service-section section-pt section-pb position-relative">
                <div className="container">
                    <div className="row">
                        <div className="testimonial-wrap">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="Cases"
                                title="Cases"
                            />
                        </div>
                    </div>
                </div>
                <div className="service-cases">
                    <div className="container">
                        <div className="row  align-items-center">
                            <div className="col-md-3 col-xl-3 col-xs-3 ">
                                <div className="service-media-wrapper media-spacing-left">
                                    {ServiceData &&
                                        ServiceData.slice(0, 2).map(
                                            (single, key) => {
                                                return (
                                                    <ServiceBox
                                                        data={single}
                                                        key={key}
                                                    />
                                                );
                                            }
                                        )}
                                </div>
                            </div>
                            <div className="col-xl-5 col-md-5 order-md-0 order-lg-0 col-xs-12 service-nopadding order-xl-0">
                                <div className="service-media-img text-center">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/feature/cases.png`}
                                        alt="cases"
                                        className="img-cases"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/feature/cases2.png`}
                                        alt="cases"
                                        className="img-cases-table"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-3  col-xl-3  ">
                                <div className="service-media-wrapper media-spacing-right">
                                    {ServiceData &&
                                        ServiceData.slice(2, 4).map(
                                            (single, key) => {
                                                return (
                                                    <ServiceBox
                                                        data={single}
                                                        key={key}
                                                    />
                                                );
                                            }
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasesListContainer;
