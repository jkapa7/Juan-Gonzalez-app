import PropTypes from "prop-types";

function Button({ text, color }) {
  return (
    <>
      <button
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
};

export default Button;
