import React from 'react';
import QListA from './AnswerList/QListA.jsx';
import HelpfulQ from './HelpfulQ.jsx';
import AAdd from './AAdd/AAdd.jsx';

const QListQ = (props) => {
  // console.log(props);
  const questionID = props.question.question_id;
  // send questionID to top component to get answers
  return(
    <div id="question">
      Q: {props.question.question_body}

      <div id="questionSide">
        <HelpfulQ
          helpful={props.question.question_helpfulness}
          updateHelpfulQ={props.updateHelpfulQ}
        />
        <AAdd />
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