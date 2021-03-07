import React from 'react';
import form from '../../../../css/Form.module.css';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.delete(Number(event.target.alt));
  }

  render() {
    // console.log(this.props);
    return(
      <div className={form[`overlay`]}>
        <img
          onClick={this.handleClick}
          className={form.thumbnail}
          src={this.props.photo}
          height="100"
          width="100"
          alt={this.props.alt}>
        </img>
      </div>
    )
  }
};

export default FileUpload;