import classes from "./styles.module.css";

type Props = {
  onClose: () => void;
};

const mock = ["4-4-2", "4-3-3", "4-1-4-1"];

export default function Content({ onClose }: Props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes["modal-wrapper"]}>
        <span
          className={`material-symbols-outlined ${classes["close-button"]}`}
          onClick={onClose}
        >
          close
        </span>
        <select>
          {mock.map((formation) => (
            <option value={formation}>{formation}</option>
          ))}
        </select>
        <button onClick={onClose}>Valider</button>
      </div>
    </div>
  );
}
