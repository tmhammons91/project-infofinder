import React from 'react';

import TextField from "material-ui/TextField";
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const sampleTopics = ["copyright", "reference", "geography"];

const styles = {
  all: {
    marginLeft: 20,
  },
  button: {
    background: "gray"
  },
  card: {
    borderStyle: "solid"
  }
}

export default class AdminPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      url: '',
      description: '',
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
    const { values } = this.state;
    return (

      <Paper zDepth={2}>
        <Card style={styles.card}>
          <CardTitle title="Add New Source" subtitle="For administrator use only" />
          <CardText>
            Populate the data fields below to add a new authoritative source to the InfoFinder database
    </CardText>

          <TextField hintText="Source Name" style={styles.all} underlineShow={false} />
          <Divider />
          <TextField hintText="Full Source URL" style={styles.all} underlineShow={false} />
          <Divider />
          <TextField hintText="Description" style={styles.all} underlineShow={false} />
          <Divider />
          <SelectField style={styles.all}
            multiple={false}
            hintText="Source topic/category"
            value={values}
            onChange={this.handleChange}
          >
            {this.menuItems(values)}
          </SelectField>
          <CardActions>
            <RaisedButton primary={true} style={styles.button} label="Add Source" />

          </CardActions>
        </Card>
      </Paper>
    );

  }
}