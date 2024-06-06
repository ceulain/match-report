export type Post =
  | "GD"
  | "ARD"
  | "DCD"
  | "DCG"
  | "ARG"
  | "MC"
  | "MCD"
  | "MCG"
  | "AD"
  | "AV"
  | "AG";

export type MatchInfo = {
  formation: string;
  teamName: string;
  opponentName: string;
  date: string;
  place: "Domicile" | "Exterieur";
};

export type App = {
  matchInfo: MatchInfo;
  players: Player[];
};

export type Player = {
  firstName: string;
  lastName: string;
  post: Post;
};

export type AddMatchInfo = {
  type: "addMatchInfo";
  payload: MatchInfo;
};

export type AddPlayer = {
  type: "addPlayer";
  payload: Player;
};

export type ChooseFormation = {
  type: "chooseFormation";
  payload: { formation: string };
};

export type Action = AddMatchInfo | AddPlayer | ChooseFormation;
