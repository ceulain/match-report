const getFormValue = (name) => document.querySelector(`[name=${name}]`).value;

async function createPdf() {
  const pdfDoc = await PDFLib.PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(
    PDFLib.StandardFonts.TimesRoman
  );

  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 30;

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
    color: PDFLib.rgb(0, 0.53, 0.71),
  });

  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });

  document.getElementById("pdf").src = pdfDataUri;
}

// createPdf();
