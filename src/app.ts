import { rgb, PDFDocument, StandardFonts } from "pdf-lib";
import { Player } from "./player";

const getFormValue = (name: string) =>
  (document.querySelector(`[name=${name}]`) as HTMLInputElement).value;

const createPdf = async () => {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const page = pdfDoc.addPage();
  const { height } = page.getSize();
  const fontSize = 24;

  const opponent = getFormValue("opponent");
  const me = getFormValue("me");
  const datetime = getFormValue("match-date");
  const location = getFormValue("location");
  const match =
    location === "Domicile" ? `${me} - ${opponent}` : `${opponent} - ${me}`;

  page.drawText(`${match} (${datetime})`, {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  (document.getElementById("pdf") as HTMLIFrameElement).src = pdfDataUri;
};

const addPlayer = () => {
  const player = new Player();
  player.create();
};

export const setupButtonPlayer = (element: Element) =>
  element.addEventListener("click", () => addPlayer());

export const setupButtonCreatePdf = (element: Element) =>
  element.addEventListener("click", () => createPdf());
