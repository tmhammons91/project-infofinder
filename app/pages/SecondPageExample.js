import React, { Component } from 'react';
import helpers from "../utils/helpers";


export default class SecondPageExample extends Component {
  constructor() {
    super();
    this.state = {
      sourceName: "", 
     url: "" , 
      description: "", 
      topic: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target; 
    const value = target.value; 
    const name = target.name; 
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault(); 
    const newSource = ({ 
      "name": this.state.sourceName , 
      "url": this.state.url, 
      "description": this.state.description, 
      "topic": this.state.topic 
    });

    helpers.addSource(newSource.name, newSource.url, newSource.description, newSource.topic).then(this.props.getSources); 
      console.log(newSource)
 
    this.setState({ 
      sourceName: "" , 
      url: "" , 
      description: "", 
      topic: "" 
    });
  }


    render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Source Name:
          <input
            name="sourceName"
            type="text"
            value={this.state.sourceName}
            onChange={this.handleInputChange} />
        </label>
        <br />
       
        <label>
          URL:
          <input
            name="url"
            type="text"
            value={this.state.url}
            onChange={this.handleInputChange} />
        </label>
                <br /> 
               
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange} />
        </label>
                <br />
        <label>
          Topic:
          <input
            name="topic"
            type="text"
            value={this.state.topic}
            onChange={this.handleInputChange} />
        </label> 
        <input type="submit" value="Submit" />
      </form>
    );
  }
  }