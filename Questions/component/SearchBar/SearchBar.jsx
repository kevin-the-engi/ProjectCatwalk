import React from 'react';
import styles from '../../css/SearchBar.css';

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
    // console.log(this.props);
    return(
      <div id="searchDiv">
        <input
          onChange={this.handleChange} id="search" type="text" name="search"
          value={this.state.search} placeholder="Have a question? Search for answers...">
        </input>
      </div>
    )
  }
};

export default SearchBar;