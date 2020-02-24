import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import stores from "./stores";
import BestExample from "./components/BestExample";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <Provider {...stores}>
    <ThemeProvider theme={createMuiTheme({ palette: { type: "dark" } })}>
      <CssBaseline />
      <BestExample />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
