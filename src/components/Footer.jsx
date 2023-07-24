import Button from "./Button";
import PropTypes from "prop-types";
import { downloadCv } from "../utils/downloadCv";
import { useTranslation } from "react-i18next";

function Footer({ txt }) {
  const [t] = useTranslation("global");

  let titleCv = t("downloadCv.titleCv");
  let text = t("downloadCv.text");
  let confirmButtonText = t("downloadCv.confirmButtonText");
  let denyButtonText = t("downloadCv.denyButtonText");

  return (
    <div className="justify-center text-center align-middle bg-green-800">
      <a href="" target="_blank" rel="noreferrer">
        Linkedin
      </a>

      <a href="" target="_blank" rel="noreferrer">
        Github
      </a>

      <a href="" target="_blank" rel="noreferrer">
        Email
      </a>

      <Button
        text={txt}
        onClick={() =>
          downloadCv(titleCv, text, confirmButtonText, denyButtonText)
        }
      />
    </div>
  );
}

Footer.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Footer;
