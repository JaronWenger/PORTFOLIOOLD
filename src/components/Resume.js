import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import BGResume from "./RESUME.pdf"; // Ensure correct path
import * as AiIcons from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const onButtonClick = () => {
    fetch(BGResume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "RESUME.pdf"; // Set download name
        alink.click();
      });
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>
        <AiIcons.AiOutlineDownload />
        Download Resume
      </button>
    </div>
  );
}

export default Resume;