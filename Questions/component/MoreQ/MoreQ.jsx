import React from 'react';
import styles from '../../css/Buttons.module.css';

class MoreQ extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.moreQ();
  }

  render() {
    return(
      <div className="footer-MoreQ">
        <button id={styles['MoreQ-btn']} onClick={this.handleClick}>
          <h3>More Answered Questions</h3>
        </button>
      </div>
    )
  }
};

export default MoreQ;