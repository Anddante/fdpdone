import { useEffect, useRef } from "react";
import SectionTitle from "../../../components/section-title";

import SwiperCore, { Navigation } from "swiper";
import Parallax from "parallax-js";

SwiperCore.use([Navigation]);
const AboutReverse = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <section id="about" className="testimonial-section section-py">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-7 col-lg-6 mb-7">
                        <div className="testimonial-wrap">
                            <SectionTitle
                                classOption="title-section"
                                title="About Us"
                                subTitle="About Us"
                            />
                        </div>
                        <p>
                            Какая-то информация о том, что мы и кто мы. Какая-то
                            информация о том, что мы и кто мы.Какая-то
                            информация о том, что мы и кто мы.Какая-то
                            информация о том, что мы и кто мы.Какая-то
                            информация о том, что мы и кто мы.
                        </p>
                    </div>
                    <div className="col-xl-5 col-lg-6 mb-7">
                        <div
                            className="testimonial-photo scene mt-10 mt-lg-0"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/testimonial/1.png`}
                                    alt="Buznex"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutReverse;
