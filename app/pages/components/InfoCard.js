import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

import { List, ListItem } from 'material-ui/List';

import Divider from 'material-ui/Divider';

import helpers from "../../utils/helpers";

export default class InfoCard extends Component {
  constructor(props) {
    super();
    this.props = props
    this.state = {
      topicValue: '',
      sources: React.ReactNode
    };
    this.getSources = this.getSources.bind(this)
  }

  componentDidUpdate() {
    if (this.state.topicValue == '') {
      this.setState({ topicValue: this.props.topicValue })
      this.getSources(this.props.topicValue)
    } else if (this.state.topicValue != this.props.topicValue) {
      this.setState({ topicValue: this.props.topicValue })
      this.getSources(this.props.topicValue)
    }
  }

  getSources(searchTopic) {
    console.log(`getSources function ${searchTopic}`);
    helpers.getSources().then((res) => {

      const resources = res.data;
      var topicSources = resources.filter(function (el) {
        return (el.topic === searchTopic);
      })
      const jsxElements = topicSources.map((element, i) => {
        return <div key={`${i}-${Date.now()}`}>
          <List id="sourceList">
            <p> <strong>{element.name} </strong></p>
            <p><a href={element.url} target="blank"> {element.url}  </a>  </p>
            <p> {"Description: " + element.description} </p>
          </List>
          <Divider />
        </div>

      });
      console.log(<div>{jsxElements}</div>)
      this.setState({ sources: <div>{jsxElements}</div> })
    })
  }//end of getSources


  render() {
    console.log("This is in the Infocard. The topicValue is: " + this.props.topicValue);
    let currentTopic = this.props.topicValue
    return (
      <Card>
       <CardTitle subtitle={this.props.topicValue} />
        <CardText children={this.state.sources} >
        </CardText>
      </Card>
    )
  }
}


