import React from 'react';
import FileUpload from './FileUpload.jsx';
import modal from './AModal.module.css';
import form from '../../../../css/Form.module.css';

class AModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: '',
      photos: [],
      show: true,
      file: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  handleChange(event) {
    let field = event.target.name;
    let value = event.target.value;

    this.setState({
      [field]: value
    })
  }

  handleUpload(event) {
    let photo = URL.createObjectURL(event.target.files[0]);
    let file = event.target.files[0].name;

    this.setState({
      photos: [...this.state.photos, photo],
      file: file
    }, () => {
      if (this.state.photos.length === 5) {
        this.setState({
          show: false
        })
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = {...this.state};
    delete formData.show;

    this.props.addAnswer(this.props.questionID, formData);
    this.props.close();

    this.setState({
      body: '',
      name: '',
      email: '',
      photos: [],
      show: true,
      file: ''
    })
  }

  handleClick(event) {
    if (!event.target.closest("#modal-main")) {
      this.props.close();
    }
  }

  deletePhoto(index) {
    this.state.photos.splice(index, 1);
    this.setState({
      photos: this.state.photos,
      show: true
    })
  }

  render() {
    let display = this.props.show ? `${modal["modal-back"]} ${modal.["display-on"]}` : `${modal["modal-back"]} ${modal["display-off"]}`;

    return(
      <div className={display} onClick={this.handleClick}>
        <div className={modal["modal-main"]} id="modal-main">
          <form className={form["answer-form"]} onSubmit={this.handleSubmit}>
            <div className={form["form-container"]}>
              <div className={form["form-header"]}>
                <h2>Submit your Answer</h2>
                <sub>[{this.props.productName}]: [{this.props.questionBody}]</sub>
              </div>

              <div className={form["form-body"]}>
                <div className={form["form-main"]}>
                  <label htmlFor="answer"><h4>Your Answer:</h4></label><br />
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
                  <label htmlFor="answer-username" className="visuallyhidden">Nickname:</label>
                  <input
                    className={`${form.field} answer-username`}
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

                <div className={form["form-email"]}>
                  <label htmlFor="answer-email" className="visuallyhidden">Email:</label>
                  <input
                    className={`${form.field} answer-email`}
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

                <div className={form["form-photos"]}>
                  {this.state.show ?
                    <div className={form["form-upload"]}>
                      <label htmlFor="form-upload"><h4>Upload Photo:</h4></label>
                      <input
                        type="file"
                        key={this.state.file}
                        className="photo"
                        accept="image/*"
                        onChange={this.handleUpload}>
                      </input>
                    </div> : null
                  }

                  <div className={form["form-thumbnails"]}>
                    {this.state.photos.map((photo, i) =>
                      <FileUpload
                        key={i}
                        photo={photo}
                        alt={i}
                        delete={this.deletePhoto}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className={form["form-footer"]}>
                  <button
                  className={form["submit-btn"]}
                  type="submit">
                    <h4>SUBMIT ANSWER</h4>
                  </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AModal;