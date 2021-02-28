import React from 'react';
import QListA from './QListA.jsx';

const QListQ = ({question}) => {
  console.log(question);
  return(
    <div>
      <p>Q: {question.question_body} </p>

      {Object.keys(question.answers).map(answer =>
        <QListA
          key={answer}
          answer={question.answers[answer]}
        />
      )}
    </div>
  )
}

export default QListQ;