import React from 'react';
import modal from './QModal.module.css';
import form from '../../css/Form.module.css';

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
    this.props.addQuestion(this.state);
    this.props.close();

    this.setState({
      body: '',
      name: '',
      email: ''
    })
  }

  handleClick(event) {
    if (!event.target.closest("#modal-main")) {
      this.props.close();
    }
  }

  render() {
    let display = this.props.show ? `${modal["modal-back"]} ${modal.["display-on"]}` : `${modal["modal-back"]} ${modal["display-off"]}`;

    return(
      <div className={display} onClick={this.handleClick}>
        <div className={modal["modal-main"]} id="modal-main">
          <form className={form["question-form"]} onSubmit={this.handleSubmit}>
            <div className={form["form-header"]}>
              <h2>Add a Question</h2>
              <sub>About the [{this.props.productName}]</sub><br />
            </div>

            <div className={form["form-body"]}>
              <div className={form["form-main"]}>
                <label htmlFor="question"><h4>Your Question:</h4></label><br />
                <textarea
                  className={form.textarea}
                  onChange={this.handleChange}
                  name="body"
                  value={this.state.body}
                  placeholder="Why did you like the product or not?"
                  minLength="20"
                  maxLength="1000"
                  rows="4"
                  cols="40"
                  required>
                </textarea><br />
              </div>

              <div className={form["form-user"]}>
                <input
                  className={form.field}
                  id="question-username"
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="Nickname: jackson11!"
                  maxLength="60"
                  required>
                </input>
                <sub className={form.sub}>For privacy reasons, do not use your full name or email address</sub>
              </div>

              <div className={form["form-email"]}>
                <input
                  className={form.field}
                  id="question-email"
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Email: jackson11!@email.com"
                  maxLength="60"
                  required>
                </input>
                <sub className={form.sub}>For authentication reasons, you will not be emailed</sub>
              </div>
            </div>

            <div className={form["form-footer"]}>
              <button
                className={form["submit-btn"]}
                type="submit">
                  <h4>SUBMIT QUESTION</h4>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default QModal;