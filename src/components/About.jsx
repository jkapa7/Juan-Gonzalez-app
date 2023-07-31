import { useTranslation } from "react-i18next";
import { downloadCv } from "../utils/downloadCv";
import Button from "./Button";

const About = () => {
  const [t] = useTranslation("global");

  let titleCv = t("downloadCv.titleCv");
  let text = t("downloadCv.text");
  let confirmButtonText = t("downloadCv.confirmButtonText");
  let denyButtonText = t("downloadCv.denyButtonText");

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      id="about"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold">Who I am?</h1>
      </div>

      <div className="w-full md:w-2/3 mx-auto my-4 p-4 flex justify-between bg-white rounded dark:bg-stone-600">
        <div className="flex w-1/2 justify-center">
          <img
            src="https://i.pinimg.com/originals/46/4f/d7/464fd7698591b58cbe008cd5fe6d7c05.jpg"
            alt="Juan Daniel Gonzalez"
            className="h-96 w-96"
          />
        </div>

        <div className="flex flex-col w-1/2 justify-center">
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

          <div className="text-center">
            <Button
              text={"hola"}
              onClick={() =>
                downloadCv(titleCv, text, confirmButtonText, denyButtonText)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
