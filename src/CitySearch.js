import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: null
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'Sorry! City not found. Please try again.'
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: ''
    });
  
    this.props.updateEvents(suggestion, null);
  }
  
  render() {
    return (
      <div className="CitySearch">
        <label for="citySearch">Find your City</label>
          <InfoAlert text={this.state.infoText} />
        <input
        type="text"
        id="citySearch"
        className="city"
        value={this.state.query}
        onChange={this.handleInputChanged}
        onFocus={() => {this.setState({ showSuggestions: true })}}
        />
        <ul className="suggestions"
          style={this.state.showSuggestions ? {}: { display: "none" }}>
          {this.state.suggestions.map((suggestion) => (
            <li 
            key={suggestion}
            onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li 
            key="all"
            onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
           </li>
          </ul>
      </div>
    );
  }
}

export default CitySearch;