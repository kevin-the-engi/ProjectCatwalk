import React from 'react';
import axios from 'axios';
import QListA from './AnswerList/QListA.jsx';
import HelpfulQ from './SideBar/HelpfulQ.jsx';
import AAdd from './SideBar/AAdd/AAdd.jsx';
import styles from './QListQ.module.css';

class QListQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    }

    this.getAnswers = this.getAnswers.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.updateHelpfulA = this.updateHelpfulA.bind(this);
    this.reportA = this.reportA.bind(this);
  }

  componentDidMount() {
    this.getAnswers(this.props.question.question_id);
  }

  getAnswers(questionID) {
    axios.get(`/qa/questions/${questionID}/answers`)
      .then(answers => {
        this.setState({
          answers: answers.data.results
      })
    })
  }

  addAnswer(questionID, answerForm) {
    axios.post(`/qa/questions/${questionID}/answers`, answerForm)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.getAnswers(questionID);
      })
    }

  updateHelpfulA(questionID, answerID) {
    axios.put(`/qa/answers/${answerID}/helpful`, { answer_helpfulness: 1 })
      .then(() => {
        this.getAnswers(questionID);
      })
      .catch(err => {
        console.log(err);
      })
  }

  reportA(questionID, answerID) {
    axios.put(`/qa/answers/${answerID}/report`, { reported: true })
      .then(() => {
        this.getAnswers(questionID);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const {
      question: {
        question_body,
        question_helpfulness,
        question_id,
        answers
      }
    } = this.props;

    // console.log(question_id)

    return(
      <section className={styles.questionContainer}>
        <div className={styles.body}>
          <div className={styles.left}>
            <span className={styles.prefix}>
              Q:
            </span>
            <span className={styles.text}>
              {question_body}
            </span>
          </div>

          <div className={styles.right}>
            <div className={styles.sidebar}>
              <HelpfulQ
                helpful={question_helpfulness}
                questionID={question_id}
                updateHelpfulQ={this.props.updateHelpfulQ}
              />

              <span className="separator">|</span>

              <AAdd
                addAnswer={this.addAnswer}
                questionID={question_id}
                questionBody={question_body}
                productName={this.props.productName}
              />
            </div>
          </div>
        </div>

        {this.state.answers.map(answer =>
          <QListA
            key={answer.answer_id}
            questionID={question_id}
            answer={answer}
            updateHelpfulA={this.updateHelpfulA}
            reportA={this.reportA}
            getAnswers={this.getAnswers}
          />
        )}
      </section>
    )
  }
}

export default QListQ;