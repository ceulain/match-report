import { useApp } from "../AppContext";
import classes from "./styles.module.css";

const PlayerList = () => {
  const { players } = useApp();

  return (
    <div className={classes.wrapper}>
      <table>
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Poste</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.lastName}</td>
              <td>{player.firstName}</td>
              <td>{player.post}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
