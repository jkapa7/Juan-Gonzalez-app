import Button from "./Button";
import PropTypes from "prop-types";
import { downloadCv } from "../utils/downloadCv";

function Footer({ text }) {
  return (
    <div>
      <a href="" target="_blank" rel="noreferrer">
        Linkedin
      </a>

      <a href="" target="_blank" rel="noreferrer">
        Github
      </a>

      <a href="" target="_blank" rel="noreferrer">
        Email
      </a>

      <Button text={text} onClick={() => downloadCv()} />
    </div>
  );
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
