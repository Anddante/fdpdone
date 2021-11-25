import PropTypes from "prop-types";

const BoxAbout = ({ data }) => {
    return (
        <div className={data.className}>
            <div className="service-card bg-light">
                <div className="service-logo ">
                    <img
                        className="brand"
                        src={process.env.PUBLIC_URL + data.icon}
                        alt="brand logo"
                    />
                    <h4 className="title pt-3">{data.title}</h4>
                    <p className="subtitle">{data.subTitle}</p>
                </div>
                <p className="excerpt my-9">{data.excerpt}</p>
                <p className="tags">{data.tags}</p>
            </div>
        </div>
    );
};

BoxAbout.propTypes = {
    data: PropTypes.object,
};

export default BoxAbout;
