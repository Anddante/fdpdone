import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Lang from "../lang";

const MainMenu = () => {
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <ScrollLink
                        activeClass="current"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={50}
                    >
                        Home
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        activeClass="current"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={50}
                    >
                        Services
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        activeClass="current"
                        to="cases"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={50}
                    >
                        Cases
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        activeClass="current"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={50}
                    >
                        Clients
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        activeClass="current"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={50}
                    >
                        Team
                    </ScrollLink>
                </li>
                <li className="dropdown">
                    <ScrollLink
                        activeClass="current"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={50}
                    >
                        Contact Us
                    </ScrollLink>
                </li>
                <Lang />
            </ul>
        </nav>
    );
};

export default MainMenu;
