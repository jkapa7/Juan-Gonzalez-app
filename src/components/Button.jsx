import PropTypes from "prop-types";

function Button({ text, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="font-extrabold text-title-h md:text-title-w bg-yellow-400"
      >
        {text}
      </button>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
