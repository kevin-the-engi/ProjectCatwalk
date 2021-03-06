import React from 'react';
import modal from '../../../../css/Modal.css';
import form from '../../../../css/Form.module.css';

class QModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: '',
      photos: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fileInput = React.createRef();
  }

  handleChange(event) {
    let field = event.target.name;
    let value = event.target.value;

    this.setState({
      [field]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addAnswer(this.props.questionID, this.state);
    console.log(this.fileInput.current.files[0]);
    console.log(this.fileInput.current.files[1]);
    this.props.close();

    this.setState({
      body: '',
      name: '',
      email: '',
      photos: []
    })
  }

  handleClick(event) {
    if (!event.target.closest(".modal-main")) {
      this.props.close();
    }
  }

  render() {
    // console.log(this.props)
    let display = this.props.show ? 'modal-back display-on' : 'modal-back display-off';

    return(
      <div className={display} onClick={this.handleClick}>
        <div className="modal-main">
          <form onSubmit={this.handleSubmit}>
            <div className={form["form-header"]}>
              <h2>Submit your Answer</h2>
              <sub>[{this.props.productName}]: [{this.props.questionBody}]</sub>
            </div>

            <div className={form["form-body"]}>
              <div className={form["form-main"]}>
                <label><h4>Your Answer:</h4></label><br />
                <textarea
                  className={form.textarea}
                  onChange={this.handleChange}
                  name="body"
                  value={this.state.body}
                  minLength="20"
                  maxLength="1000"
                  rows="4"
                  cols="40"
                  required>
                </textarea><br />
              </div>

              <div className={form["form-user"]}>
              < label><h4>Nickname:</h4></label>
                <input
                  className={form.field}
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="jack543!"
                  maxLength="60"
                  required>
                </input>
                <sub>For privacy reasons, do not use your full name or email address</sub><br />
              </div>

              <div className={form["form-user"]}>
                <label><h4>Email:</h4></label>
                <input
                  className={form.field}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="jack@email.com"
                  maxLength="60"
                  required>
                </input>
                <sub>For authentication reasons, you will not be emailed</sub><br />
              </div>

              <div className={form["for-photo"]}>
                <label>Upload Photo:</label>
                <input
                  type="file"
                  className="photo"
                  accept="image/*"
                  ref={this.fileInput}>
                </input>
              </div>
            </div>

            <div className={form["form-footer"]}>
              <div className={form.submitDiv}>
                <button className={form["submit-btn"]} type="submit"><h4>SUBMIT ANSWER</h4></button>
              </div>
              {/* <div className="close">
                <button className="close-btn" type="button" onClick={this.props.close}>Close</button>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default QModal;