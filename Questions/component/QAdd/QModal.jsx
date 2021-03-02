import React from 'react';
import styles from '../../css/QModal.css';

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
    event.preventDefault();
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
            <h2>Add a Question</h2>
            <sub>About the [Product Name]</sub>

            <p><label>Question:</label><br />
            <textarea onChange={this.handleChange} name="question" value={this.state.question}
              placeholder="Why did you like the product or not?" required></textarea></p>

            <p><label>Nickname:</label><br />
            <input
              onChange={this.handleChange} type="text" name="name" value={this.state.name}
              placeholder="jackson11!" required>
            </input><br />
            <sub>For privacy reasons, do not use your full name or email address</sub></p>

            <p><label>Email:</label><br />
            <input
              onChange={this.handleChange} type="email" name="email" value={this.state.email}
              placeholder="jackson11!@email.com" required>
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