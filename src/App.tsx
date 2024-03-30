import ActionHandler from "./ActionHandler";
import ActionList from "./ActionList";
import MatchInput from "./MatchInput";
import Pitch from "./Pitch";
import PlayerHandler from "./PlayerHandler";
import PlayerList from "./PlayerList";
import MainButton from "./MainButton";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes["main-wrapper"]}>
      <MatchInput />
      <Pitch />
      <ActionHandler />
      <PlayerHandler />
      <ActionList />
      <PlayerList />
      <MainButton />
      {/* <div id="players"></div>
      <div id="actions"></div>
      <button type="button" id="add-player">
        Ajouter un joueur
      </button>
      <button type="button" id="generate-pdf">
        Generate pdf
      </button>
      <button type="button" id="add-action">
        Ajouter une action
      </button> */}
    </div>
  );
}

export default App;
