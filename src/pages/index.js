import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
import ServicesBoxContainer from "../containers/global/icon-box";
import IntroContainer from "../containers/home/intro";
import CasesListContainer from "../containers/service/service-list";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import AboutReverse from "../containers/global/testimonial-reverse";
import ExperienceContainer from "../containers/global/box-about";
import ContactContainer from "../containers/contact";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="FDP – Web Development Outsourcing" />
                <div className="wrapper">
                    <Header />
                    <IntroContainer />
                    <BrandContainer />
                    <ServicesBoxContainer classOption="section-pb" />
                    <CasesListContainer />
                    <ExperienceContainer classOption="section-pb" />
                    <AboutReverse />
                    <ContactContainer />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
