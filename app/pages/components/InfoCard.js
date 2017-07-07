import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

//import List from 'material-ui/lib/lists/list';
//import ListItem from 'material-ui/lib/lists/list-item';
import { List, ListItem } from 'material-ui/List';
/*import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send'; */
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
      this.setState({ topicValue: this.props.topicValue})
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
      console.log("these are the sources for the current topic: ")
      console.log(topicSources)
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
    console.log("This is in the Infocard. The current state is: " + JSON.stringify(this.state.topicValue))
    let currentTopic = this.props.topicValue
    return (
      <div>

        <Card>
          {/* <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar=""
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="" alt="" />
    </CardMedia> */}
          <CardTitle  title="Choose a topic to see information resources: " subtitle={this.props.topicValue} />
         
          <CardText children={this.state.sources} >
          </CardText>
          { /*<CardActions>
      <FlatButton label="Action1" />
    </CardActions>
    */}
        </Card>

      </div>
    )
  }
}


