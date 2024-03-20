import { rgb, PDFDocument, StandardFonts, PDFPage } from "pdf-lib";
import { Player } from "./player";
import { Post } from "./types";

const getFormValue = (name: string) =>
  (document.querySelector(`[name=${name}]`) as HTMLInputElement).value;

const addImageToPdf = async (pdfDoc: PDFDocument) => {
  const pitchUrl = "terrain_de_foot.jpg";
  const pitchImageBytes = await fetch(pitchUrl).then((res) =>
    res.arrayBuffer()
  );
  const pitchImage = await pdfDoc.embedJpg(pitchImageBytes);

  const page = pdfDoc.addPage([500, 750]);

  page.drawImage(pitchImage, {
    x: 9.5,
    y: 20,
    width: 481,
    height: 703,
  });

  addCircle(page);
};

const getCircleAndTextPosition = (post: Post) => {
  if (post === "GD") {
    const x = 250;
    return {
      text: {
        x,
        y: 670,
      },
      circle: {
        x,
        y: 700,
      },
    };
  }

  if (post === "MC") {
    const x = 250;
    return {
      text: {
        x,
        y: 470,
      },
      circle: {
        x,
        y: 500,
      },
    };
  }

  if (post === "ARD") {
    const x = 70;

    return {
      text: {
        x,
        y: 550,
      },
      circle: {
        x,
        y: 580,
      },
    };
  }
  if (post === "AD") {
    const x = 70;

    return {
      text: {
        x,
        y: 150,
      },
      circle: {
        x,
        y: 180,
      },
    };
  }

  if (post === "DCD") {
    const x = 170;

    return {
      text: {
        x,
        y: 620,
      },
      circle: {
        x,
        y: 640,
      },
    };
  }

  if (post === "MCD") {
    const x = 170;

    return {
      text: {
        x,
        y: 370,
      },
      circle: {
        x,
        y: 400,
      },
    };
  }

  if (post === "MCG") {
    const x = 330;

    return {
      text: {
        x,
        y: 370,
      },
      circle: {
        x,
        y: 400,
      },
    };
  }

  if (post === "DCG") {
    const x = 330;

    return {
      text: {
        x,
        y: 620,
      },
      circle: {
        x,
        y: 640,
      },
    };
  }

  if (post === "ARG") {
    const x = 430;

    return {
      text: {
        x,
        y: 550,
      },
      circle: {
        x,
        y: 580,
      },
    };
  }

  if (post === "AG") {
    const x = 430;

    return {
      text: {
        x,
        y: 150,
      },
      circle: {
        x,
        y: 180,
      },
    };
  }

  if (post === "AV") {
    const x = 250;
    return {
      text: {
        x,
        y: 50,
      },
      circle: {
        x,
        y: 80,
      },
    };
  }

  return {};
};

const addCircle = (page: PDFPage) => {
  for (let i = 0; i < Player.playerId; i++) {
    const lastName = (
      document.querySelector(`#last-name-${i}`) as HTMLInputElement
    ).value;

    const firstName = (
      document.querySelector(`#first-name-${i}`) as HTMLInputElement
    ).value;

    const post = (document.querySelector(`#poste-${i}`) as HTMLInputElement)
      .value as Post;

    const { text, circle } = getCircleAndTextPosition(post);

    page.drawCircle({
      x: circle?.x,
      y: circle?.y,
      size: 10,
      color: rgb(0.043137254901960784, 0.30980392156862746, 0.5529411764705883),
      opacity: 1,
    });

    page.drawText(`${firstName} ${lastName}`, {
      x: text?.x,
      y: text?.y,
      size: 12,
      color: rgb(1, 1, 1),
    });
  }
};

const createPdf = async () => {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const page = pdfDoc.addPage([500, 750]);
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

  await addImageToPdf(pdfDoc);

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

export const setupButtonAddAction = (element: Element) =>
  element.addEventListener("click", () => addAction());
