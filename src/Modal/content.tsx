import { useState } from "react";
import data from "../data";
import classes from "./styles.module.css";

type Props = {
  onClose: () => void;
};

export default function Content({ onClose }: Props) {
  const formations = Object.keys(data);
  const [selectedFormation, setSelectedFormation] = useState(formations[0]);

  return (
    <div className={classes.wrapper}>
      <div className={classes["modal-wrapper"]}>
        <span
          className={`material-symbols-outlined ${classes["close-button"]}`}
          onClick={onClose}
        >
          close
        </span>
        <label htmlFor="formations">Choisissez votre formation ?</label>
        <select
          id="formations"
          name="formations"
          value={selectedFormation}
          onChange={(e) => setSelectedFormation(e.target.value)}
        >
          {formations.map((formation) => (
            <option key={formation} value={formation}>
              {formation}
            </option>
          ))}
        </select>
        <button onClick={onClose}>Valider</button>
      </div>
    </div>
  );
}
