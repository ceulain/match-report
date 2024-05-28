import ActionHandler from "./ActionHandler";
import ActionList from "./ActionList";
import MatchInput from "./MatchInput";
import Pitch from "./Pitch";
import PlayerHandler from "./PlayerHandler";
import PlayerList from "./PlayerList";
import MainButton from "./MainButton";

import classes from "./App.module.css";
import { AppProvider } from "./AppContext";
import Modal from "./Modal";

function App() {
  return (
    <AppProvider>
      <div className={classes["main-wrapper"]}>
        <MatchInput />
        <Pitch />
        <ActionHandler />
        <PlayerHandler />
        <ActionList />
        <PlayerList />
        <MainButton />
        <Modal />
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
    </AppProvider>
  );
}

export default App;
