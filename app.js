let playerId = 0;

const getFormValue = (name) => document.querySelector(`[name=${name}]`).value;

async function createPdf() {
  const pdfDoc = await PDFLib.PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(
    PDFLib.StandardFonts.TimesRoman
  );

  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
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
    color: PDFLib.rgb(0, 0.53, 0.71),
  });

  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });

  document.getElementById("pdf").src = pdfDataUri;
}

const idfy = (id) => id.toLowerCase().split(" ").join("-").slice(0, -1);

const createInput = (type, labelText, min = 1, max = 14) => {
  const id = `${idfy(labelText)}-${playerId}`;

  const label = createLabel(labelText, id);

  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute("name", id);

  if (type === "number") {
    input.setAttribute("min", min);
    input.setAttribute("max", max);
  }

  const fragment = document.createDocumentFragment();
  fragment.appendChild(label);
  fragment.appendChild(input);

  return fragment;
};

const createLabel = (text, forText) => {
  const label = document.createElement("label");
  label.setAttribute("for", forText);

  label.textContent = text;

  return label;
};

const poste = () => {
  const fragment = document.createDocumentFragment();
  const id = `poste-${playerId}`;
  const label = createLabel("Choose a position:", id);

  const positions = [
    "GD",
    "ARD",
    "DCD",
    "DGG",
    "ARG",
    "MC",
    "MCD",
    "MCG",
    "AD",
    "AV",
    "AG",
  ];

  const select = document.createElement("select");
  select.setAttribute("name", id);
  select.setAttribute("id", id);

  positions.forEach((position) => {
    const option = document.createElement("option");
    option.textContent = position;
    option.setAttribute("value", position);

    select.appendChild(option);
  });

  fragment.appendChild(label);
  fragment.appendChild(select);

  return fragment;
};

const comment = () => {
  const fragment = document.createDocumentFragment();

  const id = `comment-${playerId}`;
  const label = createLabel("Comment:", id);

  const textarea = document.createElement("textarea");
  textarea.setAttribute("name", id);
  textarea.setAttribute("id", id);

  fragment.appendChild(label);
  fragment.appendChild(textarea);

  return fragment;
};

/**
 * nom prenom numéro poste commentaire suppresssion
 */
const addPlayer = () => {
  const players = document.querySelector("#players");

  const player = document.createElement("div");
  player.setAttribute("id", `player-${playerId}`);
  player.classList.add("player-row");

  // last name
  const lastNameInput = createInput("text", "Last Name:");
  // first name
  const firsNameInput = createInput("text", "First Name:");
  // number
  const number = createInput("number", "Number:");

  // close cross
  const cross = document.createElement("span");
  cross.setAttribute("id", `cross-${playerId}`);
  cross.classList.add("material-symbols-outlined");
  cross.textContent = "close";

  cross.addEventListener("click", (event) => {
    const id = event.target.id.split("-")[1];
    const player = document.getElementById(`player-${id}`);

    player.remove();
  });

  player.append(lastNameInput);
  player.append(firsNameInput);
  player.append(number);
  player.append(poste());
  player.append(comment());
  player.append(cross);

  // location.innerHTML = `<div>
  //     <p>Im a player</p>
  //     <button type="button">Remove player</button>
  //   </div>
  // `;

  players.append(player);

  playerId++;
};
