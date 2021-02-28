import React from 'react';
import QListA from './AnswerList/QListA.jsx';

const QListQ = (props) => {
  // console.log(question);
  return(
    <div>
      <p>Q: {props.question.question_body}</p>

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