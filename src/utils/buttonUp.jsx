import smoothScroll from "../utils/smoothScroll";
import { buttonUpIcon } from "./icons";

const handleScrollToSection = (e, sectionId) => {
  e.preventDefault();
  smoothScroll(sectionId);
};

export const upButton = (
  <a
    className="fixed bottom-4 right-4 z-50 bg-gray-500 text-white px-2 py-2 rounded cursor-pointer hover:bg-slate-300"
    onClick={(e) => handleScrollToSection(e, "#s")}
  >
    {buttonUpIcon}
  </a>
);
