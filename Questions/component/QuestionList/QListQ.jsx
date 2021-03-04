import React from 'react';
import QListA from './AnswerList/QListA.jsx';
import HelpfulQ from './SideBar/HelpfulQ.jsx';
import AAdd from './SideBar/AAdd/AAdd.jsx';
import styles from './QListQ.module.css';

const QListQ = (props) => {
  const {
    question: {
      question_body,
      question_helpfulness,
      question_id,
      answers
    }} = props;
  // console.log(props);
  // useEffect(() => {
  //   props.getAnswers(props.question.question_id);
  // })

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
              updateHelpfulQ={props.updateHelpfulQ}
            />
            <AAdd
              addAnswer={props.addAnswer}
              qID={question_id}
            />
          </div>
        </div>
      </div>

      {Object.keys(answers).map(answer =>
        <QListA
          key={answer}
          answer={answers[answer]}
          updateHelpfulA={props.updateHelpfulA}
          reportA={props.reportA}
        />
      )}
    </section>
  )
}

export default QListQ;