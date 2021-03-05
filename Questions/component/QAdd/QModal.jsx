import React from 'react';
import modal from '../../css/Modal.css';
import form from '../../css/Form.css';

class QModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    this.props.addQ(this.state);
    this.props.close();

    this.setState = {
      body: '',
      name: '',
      email: ''
    }
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
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-header">
              <h2>Add a Question</h2>
              <sub>About the [Product Name]</sub><br />
            </div>

            <div className="form-body">
              <p><label>Your Question:</label><br />
              <textarea
                className="textarea"
                onChange={this.handleChange}
                name="body"
                value={this.state.body}
                placeholder="Why did you like the product or not?"
                maxLength="1000"
                rows="4"
                cols="40"
                required>
              </textarea></p><br />

              <p><label>Nickname:</label><br />
              <input
                className="field"
                onChange={this.handleChange}
                type="text"
                name="name"
                value={this.state.name}
                placeholder="jackson11!"
                maxLength="60"
                required>
              </input>
              <sub>For privacy reasons, do not use your full name or email address</sub></p><br />

              <p><label>Email:</label><br />
              <input
                className="field"
                onChange={this.handleChange}
                type="email"
                name="email"
                value={this.state.email}
                placeholder="jackson11!@email.com"
                maxLength="60"
                required>
              </input>
              <sub>For authentication reasons, you will not be emailed</sub></p>
            </div>

            <div className="form-footer">
              <div className="submit">
                <button className="submit-btn" type="submit"><h4>SUBMIT QUESTION</h4></button>
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