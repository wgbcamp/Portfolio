import React from 'react';
import HeaderBar from './components/HeaderBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#0f2244',
      dark: '#002884',
      contrastText: '#fff',
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme = {theme}>
    <Router>
    <div >
      <HeaderBar/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={HomePage} />
      <Route exact path="/contact" component={HomePage} />
    </div>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
