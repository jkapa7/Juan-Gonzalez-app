import Button from "./Button";
import { useTranslation } from "react-i18next";
import { downloadCv } from "../utils/downloadCv";

const About = () => {
  const [t] = useTranslation("global");

  let titleCv = t("downloadCv.titleCv");
  let text = t("downloadCv.text");
  let confirmButtonText = t("downloadCv.confirmButtonText");
  let denyButtonText = t("downloadCv.denyButtonText");

  return (
    <div>
      <div>
        <h1>Who I am?</h1>
      </div>

      <div className="flex justify-center align-middle">
        <img
          src="https://i.pinimg.com/originals/46/4f/d7/464fd7698591b58cbe008cd5fe6d7c05.jpg"
          alt="Juan Daniel Gonzalez"
          className="h-96 w-96"
        />

        <div className="w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            eius? Sunt officia minus commodi hic deleniti, laboriosam vel
            reprehenderit fuga nesciunt, numquam harum non dolorum! Quis
            mollitia natus voluptas. Mollitia! Lorem ipsum dolor sit amet
            conlit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eaque, eius? Sunt officia minus commodi hic deleniti, laboriosam vel
            reprehenderit fuga nesciunt, numquam harum non dolorum! Quis
            mollitia natus voluptas. Mollitia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>

          <Button
            text={"hola"}
            onClick={() =>
              downloadCv(titleCv, text, confirmButtonText, denyButtonText)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
