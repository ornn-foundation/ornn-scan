import { getStorage, KEY_STORAGE, setStorage } from "../utils";
import {
  Action,
  initialState,
  InitialState,
  Mode,
  THEME,
  THEME_DARK,
} from "./context";

export const reducer = (
  state: InitialState,
  { type, payload }: Action
): InitialState => {
  switch (type) {
    case "SET_INITIAL":
      return initialState;
    case "SET_THEME_DARK":
      document.body.classList.add("dark");
      setStorage(KEY_STORAGE.mode, Mode.dark);
      return {
        ...state,
        mode: Mode.dark,
      };
    case "SET_THEME_LIGHT":
      document.body.classList.remove("dark");
      setStorage(KEY_STORAGE.mode, Mode.light);
      return {
        ...state,
        mode: Mode.light,
      };
    case "SET_MODE_TOGGLE":
      const mode = getStorage(KEY_STORAGE.mode);
      if (mode === Mode.light || !mode) {
        document.body.classList.add("dark");
        setStorage(KEY_STORAGE.mode, Mode.dark);
        return {
          ...state,
          mode: Mode.dark,
        };
      }
      document.body.classList.remove("dark");
      setStorage(KEY_STORAGE.mode, Mode.light);
      return {
        ...state,
        mode: Mode.light,
      };
    default:
      return state;
  }
};
