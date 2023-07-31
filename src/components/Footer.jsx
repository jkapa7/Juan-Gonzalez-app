import Button from "./Button";
import PropTypes from "prop-types";
import { downloadCv } from "../utils/downloadCv";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../utils/socialLinks";

function Footer({ txt }) {
  const [t] = useTranslation("global");

  let titleCv = t("downloadCv.titleCv");
  let text = t("downloadCv.text");
  let confirmButtonText = t("downloadCv.confirmButtonText");
  let denyButtonText = t("downloadCv.denyButtonText");

  return (
    <>
      <div
        className=" text-center align-middle flex flex-col justify-center items-center h-screen"
        id="letstalk"
      >
        <p className="text-2xl font-bold">Lets talk</p>
        <div className=" bg-white w-full md:w-2/3 mx-auto my-4 p-4 rounded dark:bg-stone-600">
          <div className="flex ">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded"
              >
                <img src={link.icon} alt={link.alt} />
              </a>
            ))}

            <Button
              text={txt}
              onClick={() =>
                downloadCv(titleCv, text, confirmButtonText, denyButtonText)
              }
            />
          </div>
        </div>
      </div>
      <p className="text text-xs font-bold text-center align-middle">
        Designed & Built by Juan Daniel Gonzalez
      </p>
    </>
  );
}

Footer.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Footer;
