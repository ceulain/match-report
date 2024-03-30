import classes from "./styles.module.css";

const MatchInput = () => {
  return (
    <div className={classes.wrapper}>
      {/* <label htmlFor="me">Quelle est le nom de votre équipe ?</label> */}
      <input type="text" name="me" id="me" placeholder="Nom de votre équipe" />

      {/* <label htmlFor="opponent">Quelle est votre adversaire ?</label> */}
      <input
        type="text"
        name="opponent"
        id="opponent"
        placeholder="Nom de votre adversaire"
      />

      {/* <label htmlFor="match-date">Quelle est la date de votre match ?</label> */}
      <input
        type="datetime-local"
        name="match-date"
        id="match-date"
        placeholder="Date de votre match ?"
      />

      <span>
        <label htmlFor="location">Ou se joue votre match ?</label>
        <select name="location" id="location">
          <option selected value="Domicile">
            Domicile
          </option>
          <option value="Exterieur">Exterieur</option>
        </select>
      </span>
    </div>
  );
};

export default MatchInput;
