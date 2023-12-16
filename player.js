const createLabel = (text, forText) => {
  const label = document.createElement("label");
  label.setAttribute("for", forText);

  label.textContent = text;

  return label;
};

class Player {
  static playerId = 0;

  constructor(lastName, firstName, number, position, comment) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.number = number;
    this.position = position;
    this.comment = comment;
  }

  #createInput(type, labelText, min = 1, max = 14) {
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
  }

  #poste() {
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
  }

  #comment() {
    const fragment = document.createDocumentFragment();

    const id = `comment-${playerId}`;
    const label = createLabel("Comment:", id);

    const textarea = document.createElement("textarea");
    textarea.setAttribute("name", id);
    textarea.setAttribute("id", id);

    fragment.appendChild(label);
    fragment.appendChild(textarea);

    return fragment;
  }

  create() {
    const players = document.querySelector("#players");

    const player = document.createElement("div");
    player.setAttribute("id", `player-${playerId}`);
    player.classList.add("player-row");

    // last name
    const lastNameInput = this.#createInput("text", "Last Name:");
    // first name
    const firsNameInput = this.#createInput("text", "First Name:");
    // number
    const number = this.#createInput("number", "Number:");

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
    player.append(this.#poste());
    player.append(this.#comment());
    player.append(cross);

    players.append(player);

    playerId++;
  }
}
