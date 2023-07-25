import { useTranslation } from "react-i18next";

function LandingHome() {
  const [t] = useTranslation("global");

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{t("main.title1")}</h1>
        <h1 className="text-4xl font-bold">{t("main.title2")}</h1>
      </div>
    </div>
  );
}

export default LandingHome;
