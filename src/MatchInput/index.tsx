import { useState } from "react";
import classes from "./styles.module.css";
import { MatchInfo } from "../types";
import { useAppDispatch } from "../AppContext";

const MatchInput = () => {
  const dispatch = useAppDispatch();

  const [matchInfo, setMatchInfo] = useState<MatchInfo>({
    date: "",
    opponentName: "",
    place: "Domicile",
    teamName: "",
  });

  const handleClick = () =>
    dispatch({ type: "addMatchInfo", payload: matchInfo });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setMatchInfo((prevState: MatchInfo) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={classes.wrapper}>
      {/* <label htmlFor="me">Quelle est le nom de votre équipe ?</label> */}
      <input
        type="text"
        name="teamName"
        id="teamName"
        placeholder="Nom de votre équipe"
        onChange={handleChange}
      />

      {/* <label htmlFor="opponent">Quelle est votre adversaire ?</label> */}
      <input
        type="text"
        name="opponentName"
        id="opponentName"
        placeholder="Nom de votre adversaire"
        onChange={handleChange}
      />

      {/* <label htmlFor="match-date">Quelle est la date de votre match ?</label> */}
      <input
        type="datetime-local"
        name="date"
        id="date"
        placeholder="Date de votre match ?"
        onChange={handleChange}
      />

      <span>
        <label htmlFor="place">Ou se joue votre match ?</label>
        <select name="place" id="place" onChange={handleChange}>
          <option selected value="Domicile">
            Domicile
          </option>
          <option value="Exterieur">Exterieur</option>
        </select>
      </span>

      <button onClick={handleClick}>Valider</button>
    </div>
  );
};

export default MatchInput;
