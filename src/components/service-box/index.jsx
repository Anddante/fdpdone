import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";

const ServiceBox = ({ data }) => {
    return (
        <div className="service-cases-body">
            <h1 className="number">{data.id}</h1>
            <div className="service-media-body pb-3">
                <div className="service-media">
                    <h4 className="title">{data.title}</h4>
                    <p className="sub-title">{data.excerpt}</p>
                </div>
            </div>
        </div>
    );
};

ServiceBox.propTypes = {
    data: PropTypes.object,
};

export default ServiceBox;
