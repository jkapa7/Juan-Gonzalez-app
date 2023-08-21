import { useTranslation } from "react-i18next";

function LandingHome() {
  const [t] = useTranslation("global");

  return (
    <main className="flex justify-center items-center h-screen w-screen overflow-hidden relative">
      <div className="text-center">
        <h1 className="text-6xl font-bold">{t("main.title1")}</h1>
        <h1 className="text-6xl font-bold">{t("main.title2")}</h1>
      </div>
    </main>
  );
}

export default LandingHome;
