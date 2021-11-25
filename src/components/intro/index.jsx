import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Parallax from "parallax-js";

const Intro = ({ data }) => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="hero-slider">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="hero-slide-content">
                            <h1
                                className="title animated"
                                dangerouslySetInnerHTML={{ __html: data.title }}
                            ></h1>
                            <h3 className="sub-title  animated">
                                for business and digital agencies
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div
                            className="hero-img scene mt-lg-0"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    className="animated"
                                    src={`${process.env.PUBLIC_URL}/images/banner/FDP.png`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
