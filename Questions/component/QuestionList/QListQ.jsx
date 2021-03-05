import React from 'react';
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
  }

  componentDidMount() {
    this.props.getAnswers(this.props.question.question_id);
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

    console.log(this.props.aData)

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
                addAnswer={this.props.addAnswer}
                questionID={question_id}
              />
            </div>
          </div>
        </div>

        {Object.keys(answers).map(answer =>
          <QListA
            key={answer}
            answer={answers[answer]}
            updateHelpfulA={this.props.updateHelpfulA}
            reportA={this.props.reportA}
          />
        )}
      </section>
    )
  }
}

export default QListQ;