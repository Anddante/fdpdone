import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IconBox = ({ data }) => {
    return (
        <div className={data.className}>
            <div className="feature-card bg-light ">
                <div className="feature-card-row">
                    <div className="service-logo">
                        <img
                            className="logo"
                            src={process.env.PUBLIC_URL + data.icon}
                            alt=" feature logo"
                        />
                        <h4 className="title my-6">{data.title}</h4>
                        <p className="subtitle my-6">{data.subTitle}</p>
                    </div>
                    <p className="excerpt my-2">{data.excerpt}</p>
                    <p className="tags">{data.tags}</p>
                </div>
            </div>
        </div>
    );
};

IconBox.propTypes = {
    data: PropTypes.object,
};

export default IconBox;
