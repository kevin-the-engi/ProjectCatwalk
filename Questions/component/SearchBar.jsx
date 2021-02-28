import React from 'react';

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
      <div>
        <h4>SearchBar</h4>
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