import React, { Component } from 'react';
import helpers from "../utils/helpers";

import TextField from "material-ui/TextField";
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import SnackbarExampleSimple from "./components/Snackbar"

const sampleTopics = ["copyright", "reference", "geography"];

const styles = {
    all: {
        marginLeft: 20,
    },
    button: {
        background: "gray"
    },
    card: {
        borderTop: "solid", 
        borderBottom: "solid", 
        borderColor: "gray"
    }
}

export default class AdminPage extends React.Component {
    constructor() {
        super();
        this.state = {
            sourceName: '',
            url: '',
            description: '',
            topic: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); 
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleChange = (event, index, topic) => {
        this.setState({ topic });
    }

    menuItems(topic) {
        return sampleTopics.map((topicChoice) => (
            <MenuItem
                key={topicChoice}
                insetChildren={true}
                checked={topic && topic.indexOf(topicChoice) > -1}
                value={topicChoice}
                primaryText={topicChoice}
            />
        ));
    }
    handleSubmit(event) {
        event.preventDefault();
        const newSource = ({
            "name": this.state.sourceName,
            "url": this.state.url,
            "description": this.state.description,
            "topic": this.state.topic
        });
        helpers.addSource(newSource.name, newSource.url, newSource.description, newSource.topic).then(this.props.getSources);
        console.log(newSource)

        this.setState({
            sourceName: "",
            url: "",
            description: "",
            topic: []
        });
    }


    render() {
       const { topic } = this.state;
        return (

            <Paper zDepth={2}>
                <Card style={styles.card}>
                    <CardTitle title="Add New Source" subtitle="For administrator use only" />
                    <CardText>
                        Populate the data fields below to add a new authoritative source to the InfoFinder database
                    </CardText>
                    <TextField
                        hintText="Source Name"
                        style={styles.all}
                        underlineShow={false}
                        name="sourceName"
                        type="text"
                        value={this.state.sourceName}
                        onChange={this.handleInputChange}
                    />   
                <Divider />
                <TextField 
                        hintText="Full Source URL"
                        style={styles.all}
                        underlineShow={false}
                        name="url"
                        type="text"
                        value={this.state.url}
                        onChange={this.handleInputChange}
                    />
                <Divider />
                <TextField 
                hintText="Description" 
                style={styles.all} 
                underlineShow={false}
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleInputChange}
                 />
                <Divider />
                <SelectField style={styles.all}
                    multiple={false}
                    hintText="Source topic/category"
                    value={topic}
                    onChange={this.handleChange}
                >
                    {this.menuItems(topic)}
                </SelectField>
                <CardActions>
                    <RaisedButton primary={true} style={styles.button} label="Add Source" onTouchTap = {this.handleSubmit} />

                </CardActions>

                </Card>

            </Paper >
        );

    }
}