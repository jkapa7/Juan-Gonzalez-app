import { buttonUpIcon } from "./icons";

export const upButton = (
  <a
    className="fixed bottom-4 right-4 z-50 bg-yellow-400 text-black px-2 py-2 rounded cursor-pointer hover:bg-slate-300"
    onClick={() => scrollToSection("landing")}
  >
    {buttonUpIcon}
  </a>
);

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
