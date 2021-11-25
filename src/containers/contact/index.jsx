import React from "react";
import ContactForm from "../../components/contact-form";
import SectionTitle from "../../components/section-title";

const ContactContainer = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-7 col-lg-6 mb-7">
                        <div className="contact-title-section">
                            <div className="col mx-auto mb-3 text-center">
                                <SectionTitle
                                    classOption="title-section"
                                    subTitle="Contact Us"
                                    title="Contact Us"
                                />
                            </div>
                            <div className="map">
                                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa4af83515cee7a1959d983d645d9674f62ce9018ac032994e4668febfc67382e&amp;source=constructor&width=100"
                                    frameBorder="0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mb-7 ">
                        <div className="contact-address text-center">
                            <ContactForm />
                        </div>
                        <div className="privacy mt-4">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="px-2">Privacy Policy</a>
                            <p>2020 - 2021 FDP</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContainer;
