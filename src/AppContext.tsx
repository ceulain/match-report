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
    date: "",
    opponentName: "",
    place: "Domicile",
    teamName: "",
  },
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
          teamName,
          opponentName,
          date,
          place,
        },
      };
    }
    default: {
      throw Error("unknown action: " + action.type);
    }
  }
};

export const useApp = () => useContext(AppContext);
export const useAppDispatch = () => useContext(AppDispatchContext);
