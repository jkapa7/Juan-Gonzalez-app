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
    <div className="justify-center text-center align-middle bg-white">
      <p>Lets talk</p>

      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className=" hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded"
      >
        Linkedin
      </a>

      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className=" hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded"
      >
        Github
      </a>

      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className=" hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded"
      >
        Email
      </a>

      <Button
        text={txt}
        onClick={() =>
          downloadCv(titleCv, text, confirmButtonText, denyButtonText)
        }
      />

      <p>Designed & Built byJuan Daniel Gonzalez</p>
    </div>
  );
}

Footer.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Footer;
