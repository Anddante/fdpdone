import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";
import Logo from "../../logo";
import { Link as ScrollLink } from "react-scroll";
import LangMob from "../lang-mob";

const MobileMenu = ({ show, onClose }) => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <div className={`offcanvas-modal ${show ? "show" : ""}`}>
            <div className="offcanvas-dialog">
                <div className="menu-content">
                    <div className="offcanvas-header">
                        <Logo
                            classOption="offcanvas-logo d-inline-block"
                            image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                        />
                        <LangMob />
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>

                    <nav id="offcanvasNav" className="offcanvas-menu">
                        <ul>
                            <li>
                                <ScrollLink
                                    activeClass="current"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={50}
                                    onClick={onClose}
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
                                    onClick={onClose}
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
                                    onClick={onClose}
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
                                    onClick={onClose}
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
                                    onClick={onClose}
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
                                    onClick={onClose}
                                >
                                    Contact Us
                                </ScrollLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default MobileMenu;
