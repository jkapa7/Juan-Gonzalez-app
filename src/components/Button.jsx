import PropTypes from "prop-types";

function Button({ text, color, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={
          color
            ? `font-extrabold text-title-h md:text-title-w ${color}`
            : "font-extrabold text-title-h md:text-title-w text-slate-700"
        }
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
