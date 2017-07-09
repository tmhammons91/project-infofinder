import React from "react";
import { Link } from "react-router";
import AppBar from "material-ui/AppBar"; 
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const style = {
  appbar: {
    backgroundColor: "#3c8690"
  }
}

const MyNavLinks = () => (
<ToolbarGroup>
    <FlatButton label="Home" containerElement={<Link to="/"/>}/>
    <FlatButton label="Super Secret Admin Page" containerElement={<Link to="/admin" />}/>
    <FlatButton label="API" href="/api/sources" target="blank"/>
  </ToolbarGroup> 
);
  
const Navbar = () => (

  <AppBar style={style.appbar}
    title="InfoFinder"
   iconElementRight = {<MyNavLinks />}
   showMenuIconButton={false}
  />
   
);



export default Navbar; 
