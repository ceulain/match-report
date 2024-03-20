import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <form>
        <label htmlFor="me">Quelle est le nom de votre équipe ?</label>
        <input type="text" name="me" id="me" />

        <label htmlFor="opponent">Quelle est votre adversaire ?</label>
        <input type="text" name="opponent" id="opponent" />

        <label htmlFor="match-date">Quelle est la date de votre match ?</label>
        <input type="datetime-local" name="match-date" id="match-date" />

        <label htmlFor="location">Ou se joue votre match ?</label>
        <select name="location" id="location">
          <option selected value="Domicile">
            Domicile
          </option>
          <option value="Exterieur">Exterieur</option>
        </select>

        <div id="players"></div>
        <div id="actions"></div>

        <button type="button" id="add-player">
          Ajouter un joueur
        </button>
        <button type="button" id="generate-pdf">
          Generate pdf
        </button>
        <button type="button" id="add-action">
          Ajouter une action
        </button>
      </form>
      <iframe id="pdf" height="700" width="600"></iframe>
    </>
  );
}

export default App;
