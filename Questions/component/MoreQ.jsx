import React from 'react';

class MoreQ extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked')
  }

  render() {
    return(
      <button onClick={this.handleClick}>More Questions</button>
    )
  }
};

export default MoreQ;