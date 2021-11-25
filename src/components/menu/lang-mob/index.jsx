import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";

const LangMob = () => {
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
        <nav id="offcanvasNav" className="offcanvas-menu">
            <ul>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/"}>ENG</NavLink>
                    <span
                        className="menu-expand"
                        onClick={onClickHandler}
                        aria-hidden="true"
                    ></span>
                    <ul>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/rus"}>
                                RUS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/rus"}>
                                DEU
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/rus"}>
                                ITA
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default LangMob;
