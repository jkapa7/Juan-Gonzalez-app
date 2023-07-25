import PropTypes from "prop-types";

function Button({ text, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="font-bold text-title-h bg-yellow-400  mx-auto my-auto px-2 py-1 rounded hover:bg-yellow-300 text-black"
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
