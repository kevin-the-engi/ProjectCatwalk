import React from 'react';
import styles from './QListA.module.css'
import HelpfulA from './HelpfulA.jsx';
import ReportA from './ReportA.jsx';

const QListA = (props) => {
  const {
    answer: {
      answer_id,
      body,
      date,
      answerer_name,
      helpfulness
    }
  } = props;

  return(
    <div className={styles.answerContainer}>
      <div className={styles["answer-body"]}>
        <span className={styles["answer-prefix"]}>
          A:
        </span>

        <div className={styles.textContainer}>
          <span className={styles["answer-text"]}>
            {body}
          </span>

          <span className={styles.answererContainer}>
            <span className={styles.answerer}>
              <sub>
                by {answerer_name === 'Seller' ? <strong>{answerer_name}</strong>: `${answerer_name}`}, {date}
              </sub>
            </span>

            <span className="separator"><sub>|</sub></span>

            <HelpfulA
              answerID={answer_id}
              questionID={props.questionID}
              helpful={helpfulness}
              updateHelpfulA={props.updateHelpfulA}
              getAnswers={props.getAnswers}
            />

            <span className="separator"><sub>|</sub></span>

            <ReportA
              answerID={answer_id}
              questionID={props.questionID}
              reportA={props.reportA}
              getAnswers={props.getAnswers}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default QListA;