export type MatchInfo = {
  teamName: string;
  opponentName: string;
  date: string;
  place: "Domicile" | "Exterieur";
};

export type App = {
  matchInfo: MatchInfo;
};

export type AddMatchInfo = {
  type: "addMatchInfo";
  payload: MatchInfo;
};

export type Action = AddMatchInfo;
