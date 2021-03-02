import React from 'react';
import QListA from './AnswerList/QListA.jsx';
import HelpfulQ from './SideBar/HelpfulQ.jsx';
import AAdd from './SideBar/AAdd/AAdd.jsx';
import styles from './QListQ.module.css';

const QListQ = (props) => {
  // console.log(props);
  const questionID = props.question.question_id;
  // send questionID to top component to get answers
  return(
    <div className={styles.questionContainer}>
      <div className={styles.body}>
        <div className={styles.left}>
          <span className={styles.prefix}>
            Q:
          </span>
          <span className={styles.text}>
            {props.question.question_body}
          </span>
        </div>

        <div className={styles.right}>
          <div className={styles.sidebar}>
            <HelpfulQ
              helpful={props.question.question_helpfulness}
              updateHelpfulQ={props.updateHelpfulQ}
              />
            <AAdd />
          </div>
        </div>
      </div>

      {Object.keys(props.question.answers).map(answer =>
        <QListA
          key={answer}
          answer={props.question.answers[answer]}
        />
      )}
    </div>
  )
}

export default QListQ;