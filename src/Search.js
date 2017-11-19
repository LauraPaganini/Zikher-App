import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  constructor(props){
    super(props)
    this.title = "Enter a search for Spotify";
    this.state = {value: "Search"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert(this.state.value);
    event.preventDefault(); 
  }
  
  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
	  <label>{this.title}</label>
	  <input type="text" value={this.state.value} onChange={this.handleChange} />
	  <input type="submit" value="Submit" />
	</form>
      </div>
    );
  }
}

export default Search;
