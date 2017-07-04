import React from "react";
import { Link } from "react-router";

import { Card, CardTitle, CardText, CardActions } from "material-ui/Card";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField"; 

import RaisedButton from "material-ui/RaisedButton";
import InfoCard from "./components/InfoCard";


const sampleTopics = [  "copyright", "reference",  "geography"]; 

const styles = {
    card: {
        textAlign: "center",
        marginBottom: "100px"
    },
    cardText: {
        overflow: "hidden",
        paddingLeft: "100px",
        paddingRight: "100px"
    }
}

export default class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            values: []
        };
    }

    handleChange = (event, index, values) => this.setState({ values });

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

                    <CardTitle title="Welcome to InfoFinder" subtitle="Select a topic to see authoritative information sources" />



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
