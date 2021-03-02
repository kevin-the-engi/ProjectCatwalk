import React from 'react';
import styles from './QListA.module.css'
import HelpfulA from './HelpfulA.jsx';
import ReportA from './ReportA.jsx';

const QListA = (props) => {
  // console.log(props);
  let date = props.answer.date.slice(0, 10).split('-');
  let year = Number(date[0]);
  let month = Number(date[1]);
  let day = Number(date[2]);
  date = new Date(year, month, day)

  const formattedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(date);

  return(
    <div className={styles.answerContainer}>
      <div className={styles.body}>
        <span className={styles.prefix}>
          A:
        </span>

        <div className={styles.textContainer}>
          <span className={styles.text}>
            {props.answer.body}
          </span>

          <span className={styles.answererContainer}>
            <sub>by {props.answer.answerer_name}, {formattedDate} |</sub>
          </span>
        </div>
      </div>

    </div>
  );
};

export default QListA;