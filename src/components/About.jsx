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
    <main className="flex flex-col justify-center items-center h-screen w-screen overflow-hidden relative">
      <div className="text-center text-2xl font-bold">
        <h1>Who I am?</h1>
      </div>

      <div className="md:w-2/3 mx-auto my-4 p-4 flex justify-between ">
        <div className="flex w-1/2 h-fit justify-center ">
          <img
            src="https://i.pinimg.com/originals/46/4f/d7/464fd7698591b58cbe008cd5fe6d7c05.jpg"
            alt="Juan Daniel Gonzalez"
            className="h-full w-full rounded-l-lg "
          />
        </div>

        <div className="flex flex-col w-1/2 justify-center px-4 bg-white rounded">
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
    </main>
  );
};

export default About;
