import Swal from "sweetalert2";
import pdfEnBlack from "../assets/cvs/englishCv/JuanGonzalezEnBlack.pdf";
import pdfEsWhite from "../assets/cvs/spanishCv/JuanGonzalezEsWhite.pdf";

const handleCVDownload = (pdf) => {
  window.open(pdf);
};

export const downloadCv = (
  title,
  text,
  confirmButtonText,
  denyButtonText,
  color = "#fff"
) => {
  Swal.fire({
    title,
    text,
    confirmButtonText,
    denyButtonText,
    showDenyButton: true,
    showCloseButton: true,
    background: color,
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      handleCVDownload(pdfEnBlack);
    }

    if (result.isDenied) {
      handleCVDownload(pdfEsWhite);
    }
  });
};
