import React from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
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

    this.props.dynamicSearch(value);
  }

  render() {
    return(
      <div id="searchDiv">
        <label htmlFor="searchbar" className="visuallyhidden">Search</label>
        <input
          onChange={this.handleChange}
          id="searchbar"
          className={styles.searchbar}
          type="text"
          name="search"
          value={this.state.search}
          placeholder="Have a question? Search for answers...">
        </input>
      </div>
    )
  }
};

export default SearchBar;