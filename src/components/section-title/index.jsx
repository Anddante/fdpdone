import PropTypes from "prop-types";

const SectionTitle = ({ subTitle, title, classOption }) => {
    return (
        <div className={`title-section ${classOption}`}>
            <span className="sub-title">{subTitle}</span>
            <h3
                className="title"
                dangerouslySetInnerHTML={{ __html: title }}
            ></h3>
        </div>
    );
};

SectionTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    classOption: PropTypes.string,
    excerptClassOption: PropTypes.string,
};
SectionTitle.defaultProps = {
    classOption: "section-title",
};

export default SectionTitle;
