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
  }

  handleChange(event) {
    let field = event.target.name;
    let value = event.target.value;

    this.setState({
      [field]: value
    })
  }

  handleSubmit(event) {
    this.props.addA(this.state);
    this.props.close();
    event.preventDefault();
  }

  render() {
    // console.log(this.props)
    return(
      <div className={this.props.show ? 'modal-back display-on' : 'modal-back display-off'}>
        <div id="modal-main">
          <form onSubmit={this.handleSubmit}>
            <h2>Submit your Answer</h2>
            <sub>[Product Name]: [QuestionBody]</sub>

            <p><label>Your Answer:</label><br />
            <textarea onChange={this.handleChange} name="answer"
              value={this.state.body} required></textarea></p>

            <p><label>What is your nickname:</label><br />
            <input
              onChange={this.handleChange} type="text" name="name" value={this.state.name}
              placeholder="jack543!" required>
            </input><br />
            <sub>For privacy reasons, do not use your full name or email address</sub></p>

            <p><label>Email:</label><br />
            <input
              onChange={this.handleChange} type="email" name="email" value={this.state.email}
              placeholder="jack@email.com" required>
            </input><br />
            <sub>For authentication reasons, you will not be emailed</sub></p>

            <input type="submit" value="Submit"></input>
            <button type="button" onClick={this.props.close}>Close</button>
          </form>
        </div>
      </div>
    )
  }
}

export default QModal;