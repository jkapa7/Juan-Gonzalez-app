import Swal from "sweetalert2";
import pdfEnBlack from "../assets/cvs/englishCv/JuanGonzalezEnBlack.pdf";
import pdfEsWhite from "../assets/cvs/spanishCv/JuanGonzalezEsWhite.pdf";

const handleCVDownload = (pdf) => {
  window.open(pdf);
};

export const downloadCv = (color = "#fff") => {
  Swal.fire({
    title: "Succes!",
    text: "Do you want to continue?",

    confirmButtonText: "Dark Version",
    denyButtonText: "Ligth Version",

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
