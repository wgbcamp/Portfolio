import React from 'react';
import HeaderBar from './components/HeaderBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#100E17',
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
      <HomePage/>
    </div>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
