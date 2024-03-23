import "./App.css";
import MatchInput from "./MatchInput";
import Pitch from "./Pitch";
import PlayerHandler from "./PlayerHandler";

function App() {
  return (
    <>
      <MatchInput />
      <Pitch />
      <PlayerHandler />
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
    </>
  );
}

export default App;
