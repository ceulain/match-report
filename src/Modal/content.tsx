import classes from "./styles.module.css";

type Props = {
  onClose: () => void;
};

export default function Content({ onClose }: Props) {
  return (
    <div className={classes.wrapper}>
      <span
        className={`material-symbols-outlined ${classes["close-button"]}`}
        onClick={onClose}
      >
        close
      </span>
      <p>Je suis une modal</p>
      <button onClick={onClose}>Valider</button>
    </div>
  );
}
