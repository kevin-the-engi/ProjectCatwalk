import React from 'react';

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
    this.props.addA(this.state);
    this.props.close();

    this.setState = {
      body: '',
      name: '',
      email: '',
      photos: []
    }
  }

  handleClick(event) {
    event.preventDefault();
    if (!event.target.closest(".modal-main")) {
      this.props.close();
    }
  }

  render() {
    // console.log(this.props)
    let display = this.props.show ? 'modal-back display-on' : 'modal-back display-off'

    return(
      <div className={display} onClick={this.handleClick}>
        <div className="modal-main">
          <form onSubmit={this.handleSubmit}>
            <h2>Submit your Answer</h2>
            <sub>[Product Name]: [QuestionBody]</sub>

            <p><label>Your Answer:</label><br />
            <textarea
              onChange={this.handleChange}
              name="answer"
              value={this.state.body}
              maxLength="1000"
              rows="8"
              cols="40"
              required>
            </textarea></p><br />

            <p><label>What is your nickname:</label><br />
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
              placeholder="jack543!"
              maxLength="60"
              required>
            </input>
            <sub>For privacy reasons, do not use your full name or email address</sub></p><br />

            <p><label>Your email:</label><br />
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              value={this.state.email}
              placeholder="jack@email.com"
              maxLength="60"
              required>
            </input>
            <sub>For authentication reasons, you will not be emailed</sub></p>

            <input type="submit" value="Submit answer"></input>
            <button type="button" onClick={this.props.close}>Close</button>
          </form>
        </div>
      </div>
    )
  }
}

export default QModal;