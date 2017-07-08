import React from "react";
import { Link } from "react-router";
import AppBar from "material-ui/AppBar"; 
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


const MyNavLinks = () => (
<ToolbarGroup>
    <FlatButton label="Home" containerElement={<Link to="/"/>}/>
    <FlatButton label="Super Secret Admin Page" containerElement={<Link to="/admin" />}/>
    <FlatButton label="API" href="/api/sources" target="blank"/>
  </ToolbarGroup> 
);
  
const Navbar = () => (

  <AppBar
    title="InfoFinder: A Service from Authentical.Info"
   iconElementRight = {<MyNavLinks />}
   showMenuIconButton={false}
  />
   
);



export default Navbar; 
