import React from 'react';
import styles from '../css/SearchBar.css';


class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let field = event.target.name;
    let value = event.target.value;

    this.setState({
      [field]: value
    })
  }

  render() {
    return(
      <div id="searchDiv">
        <input
          id="search"
          type="text"
          onChange={this.handleChange}
          name="search"
          value={this.state.search}
          placeholder="Have a question? Search for answers...">
        </input>
      </div>
    )
  }
};

export default SearchBar;