export type Post =
  | "GD"
  | "ARD"
  | "DCD"
  | "DCG"
  | "ARG"
  | "MC"
  | "MD"
  | "MCD"
  | "MCG"
  | "MG"
  | "AD"
  | "AV"
  | "AG";

export type Composition = Partial<Record<Post, { x: number; y: number }>>;
export type MatchInfo = {
  composition?: Composition;
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
