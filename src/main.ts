import { setupButtonCreatePdf, setupButtonPlayer } from "./app";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <form>
      <label for="me">Quelle est le nom de votre équipe ?</label>
      <input type="text" name="me" id="me" />

      <label for="opponent">Quelle est votre adversaire ?</label>
      <input type="text" name="opponent" id="opponent" />

      <label for="match-date">Quelle est la date de votre match ?</label>
      <input type="datetime-local" name="match-date" id="match-date" />

      <label for="location">Ou se joue votre match ?</label>
      <select name="location" id="location">
        <option selected value="Domicile">Domicile</option>
        <option value="Exterieur">Exterieur</option>
      </select>

      <div id="players"></div>

      <button type="button" id="add-player">Ajouter un joueur</button>
      <button type="button" id="generate-pdf">Generate pdf</button>
    </form>
     <iframe id="pdf" style="width: 100%; height: 100%"></iframe>
`;

setupButtonPlayer(document.querySelector("#add-player") as Element);
setupButtonCreatePdf(document.querySelector("#generate-pdf") as Element);
