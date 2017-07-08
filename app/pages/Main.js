import React from 'react';

import { Container } from "react-grid-system"; 

// --------------Setup for Material-Ui -----------------------------
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import Navbar from "./components/navbar"; 
import Footer from "./components/Footer"; 

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
// ----------------------------------------------------------------- 

export default class Main extends React.Component {

  render() {
    return (
       <MuiThemeProvider>
              
        <Container>
       <Navbar />
        {this.props.children}
         <Footer />
        </Container>
      </MuiThemeProvider>
    );
  }
}