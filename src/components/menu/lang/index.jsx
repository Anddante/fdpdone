import { NavLink } from "react-router-dom";

const Lang = () => {
    return (
        <li>
            <NavLink to={process.env.PUBLIC_URL + "/"}>ENG</NavLink>

            <ul className="sub-menu">
                <li className="sub-menu-item">
                    <NavLink
                        className="sub-menu-link"
                        to={process.env.PUBLIC_URL + "/rus"}
                    >
                        RUS
                    </NavLink>
                </li>
                <li className="sub-menu-item">
                    <NavLink
                        className="sub-menu-link"
                        to={process.env.PUBLIC_URL + "/deu"}
                    >
                        DEU
                    </NavLink>
                </li>
                <li className="sub-menu-item">
                    <NavLink
                        className="sub-menu-link"
                        to={process.env.PUBLIC_URL + "/ita"}
                    >
                        ITA
                    </NavLink>
                </li>
            </ul>
        </li>
    );
};

export default Lang;
