import React from 'react';

const QListQ = ({question}) => {
  console.log(question);
  return(
    <div>
      Q: {question.question_body}

    </div>
  )
}

export default QListQ;