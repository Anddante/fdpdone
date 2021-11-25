import React from "react";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="copy-right-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-3 col-lg-3">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/footer/12.png`}
                                alt="FDP"
                                className="logo-footer-img px-2"
                            />
                            <div className="copyright-info pt-2">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <p>ООО «ФДП» © 2021</p>
                                <p>Политика конфиденциальности</p>
                            </div>
                        </div>
                        <div className="copyright-row col-xl-6 col-md-6  col-lg-5">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/footer/pandafooter.png`}
                                alt="FDP"
                                className="logo-img px-2"
                            />
                            <div className="copyright-info text-center pt-4">
                                <h1>
                                    <span className="red">FIRE</span>{" "}
                                    <span className="fil px-1">DISCO</span>
                                    <span className="white px-1">PANDA</span>
                                </h1>
                            </div>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/footer/pandafooterrev.png`}
                                alt="FDP"
                                className="logo-img-rev px-2"
                            />
                        </div>
                        <div className="copyright-info col-xl-3 col-lg-4 col-md-3 pt-2  ">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <p>Email: firediscopandallc@gmail.com</p>
                            <p>Телефон: 8-999-999-9999</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
