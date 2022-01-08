import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import { getStorage, KEY_STORAGE } from "../src/utils/storage";
import { Context, initialState, Mode } from "../src/lib/context";
import { reducer } from "../src/lib/reducers";
import { Loader } from "../src/widget";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { useTheme } from "../src/utils";
import "rsuite/dist/rsuite.min.css";
import "../public/styles/global.css";

const progress = new ProgressBar({
  size: 3,
  color: "#2962FF",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const [pageLoading, setPageLoading] = React.useState<boolean>(true);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  const theme = useTheme();
  // const router = useRouter();
  React.useEffect(() => {
    /*  const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setTimeout(() => {
        setPageLoading(false);
      }, 60000);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete); */
    const element = getStorage(KEY_STORAGE.mode);
    if (element) {
      if (element === Mode.dark) {
        dispatch({ type: "SET_THEME_DARK" });
      } else {
        dispatch({ type: "SET_THEME_LIGHT" });
      }
    } else {
      if (theme === Mode.dark) {
        dispatch({ type: "SET_THEME_DARK" });
      } else {
        dispatch({ type: "SET_THEME_LIGHT" });
      }
    }
    setTimeout(() => {
      setPageLoading(false);
    }, 2200);
    return () => {};
  }, []);

  return (
    <>
      <Context.Provider value={value}>
        {pageLoading && <Loader />}
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
}
