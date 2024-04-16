import PropTypes from "prop-types";
const Image = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
