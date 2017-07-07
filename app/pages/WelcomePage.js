import React from "react";
import { Link } from "react-router";

import { Card, CardTitle, CardText, CardActions, CardMedia, CardHeader } from "material-ui/Card";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField"; 

import RaisedButton from "material-ui/RaisedButton";
import InfoCard from "./components/InfoCard";


const sampleTopics = [  "copyright", "reference",  "geography"]; 

const styles = {
    card: {
        textAlign: "center",
        paddingBottom: "15px",
        fontSize: "40px", 
        borderStyle: "double", 
        borderWidth: "10px",
        borderColor: "blue" 

       
    },
    cardText: {
        overflow: "hidden",
        paddingLeft: "50px",
        paddingRight: "50px"
    }, 
    }

export default class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            values: []
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event, index, values) => { 

        this.setState({ values });
    }

menuItems(values) {
    return sampleTopics.map((topic) => (
      <MenuItem
        key={topic}
        insetChildren={true}
        checked={values && values.indexOf(topic) > -1}
        value={topic}
        primaryText={topic}
      />
    ));
  }

    render() {

     const {values} = this.state;
    console.log("the current state is: " + JSON.stringify(this.state.values)) 
    return(
            <div>

                <Card style={styles.card}>
                    <CardTitle 
                    titleStyle={{
                        fontSize: "40px",
                        padding: "10px", 

                    }}  title="Welcome to InfoFinder"  subtitle="Select a topic to see authoritative information sources" /> 

      <SelectField
      
        multiple={false}
        hintText="Select a topic"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );

                </Card>
                <InfoCard topicValue={this.state.values}/>
            </div>
        )

    }
} 
