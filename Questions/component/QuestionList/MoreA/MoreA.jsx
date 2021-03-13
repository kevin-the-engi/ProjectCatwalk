import React from 'react';
import sidebar from '../SideBar/SideBar.module.css'

class MoreA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState(state => ({
      expand: !state.expand
    }), () => {
      this.props.moreA(this.state.expand);
    });
  }

  render() {
    return(
      <div id={sidebar.moreAnswer}>
        <button className={sidebar["moreAnswer-btn"]} onClick={this.handleClick}>
          {this.state.expand ? 'COLLAPSE ANSWERS' : 'SEE MORE ANSWERS'}
        </button>
      </div>
    )
  }
}

export default MoreA;