import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { Action, App } from "./types";

const initialApp: App = {
  matchInfo: {
    formation: "",
    date: "",
    opponentName: "",
    place: "Domicile",
    teamName: "",
  },
  players: [],
};

const AppContext = createContext<App>(initialApp);
const AppDispatchContext = createContext<Dispatch<Action>>(() => null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [app, dispatch] = useReducer(appReducer, initialApp);

  return (
    <AppContext.Provider value={app}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

const appReducer = (app: App, action: Action) => {
  switch (action.type) {
    case "addMatchInfo": {
      const { date, place, teamName, opponentName } = action.payload;

      return {
        ...app,
        matchInfo: {
          ...app.matchInfo,
          teamName,
          opponentName,
          date,
          place,
        },
      };
    }

    case "addPlayer": {
      const { firstName, lastName, post } = action.payload;
      return {
        ...app,
        players: [
          ...app.players,
          {
            firstName,
            lastName,
            post,
          },
        ],
      };
    }

    case "chooseFormation": {
      const { formation } = action.payload;

      return {
        ...app,
        matchInfo: {
          formation,
        },
      };
    }
    default: {
      throw Error("unknown action");
    }
  }
};

export const useApp = () => useContext(AppContext);
export const useAppDispatch = () => useContext(AppDispatchContext);
