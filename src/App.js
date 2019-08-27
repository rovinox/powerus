import React from 'react';
import {HashRouter} from "react-router-dom"
import Router from "./Router"
import './App.css';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

function App() {

  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: red
    }
  });
  return (
    <HashRouter>
       <MuiThemeProvider theme={theme}>
        {Router}
       </MuiThemeProvider>
    </HashRouter>
  )
}

export default App;
