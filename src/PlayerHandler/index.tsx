import { useState } from "react";
import classes from "./styles.module.css";
import { Player, Post } from "../types";
import { useAppDispatch } from "../AppContext";

const posts = [
  "GD",
  "ARD",
  "DCD",
  "DCG",
  "ARG",
  "MC",
  "MCD",
  "MCG",
  "AD",
  "AV",
  "AG",
];

const PlayerHandler = () => {
  const dispatch = useAppDispatch();

  const initState = {
    firstName: "",
    lastName: "",
    post: "" as Post,
  };
  const [player, setPlayer] = useState<Player>(initState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setPlayer((prevState: Player) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => dispatch({ type: "addPlayer", payload: player });

  return (
    <div className={classes.wrapper}>
      <input
        type="text"
        name="firstName"
        placeholder="Prénom"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Nom"
        onChange={handleChange}
      />
      <select name="post" onChange={handleChange}>
        {posts.map((post, index) => (
          <option key={index} value={post}>
            {post}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Ajouter un joueur</button>
    </div>
  );
};

export default PlayerHandler;
