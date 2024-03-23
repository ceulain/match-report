const MatchInput = () => {
  return (
    <form>
      {/* <label htmlFor="me">Quelle est le nom de votre équipe ?</label> */}
      <input type="text" name="me" id="me" />

      {/* <label htmlFor="opponent">Quelle est votre adversaire ?</label> */}
      <input type="text" name="opponent" id="opponent" />

      {/* <label htmlFor="match-date">Quelle est la date de votre match ?</label> */}
      <input type="datetime-local" name="match-date" id="match-date" />

      <label htmlFor="location">Ou se joue votre match ?</label>
      <select name="location" id="location">
        <option selected value="Domicile">
          Domicile
        </option>
        <option value="Exterieur">Exterieur</option>
      </select>
    </form>
  );
};

export default MatchInput;
