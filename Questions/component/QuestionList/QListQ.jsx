import React from 'react';
import QListA from './AnswerList/QListA.jsx';
import HelpfulQ from './SideBar/HelpfulQ.jsx';
import AAdd from './SideBar/AAdd/AAdd.jsx';
import styles from './QListQ.module.css';

const QListQ = (props) => {
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
            {props.question.question_body}
          </span>
        </div>

        <div className={styles.right}>
          <div className={styles.sidebar}>
            <HelpfulQ
              helpful={props.question.question_helpfulness}
              questionID={props.question.question_id}
              updateHelpfulQ={props.updateHelpfulQ}
            />
            <AAdd
              addAnswer={props.addAnswer}
              qID={props.question.question_id}
            />
          </div>
        </div>
      </div>

      {Object.keys(props.question.answers).map(answer =>
        <QListA
          key={answer}
          answer={props.question.answers[answer]}
        />
      )}
    </section>
  )
}

export default QListQ;