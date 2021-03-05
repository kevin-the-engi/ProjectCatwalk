import React from 'react';
import QListQ from './QListQ.jsx';

const QList = (props) => {
  // console.log(props.qData);
  return (
    <div id="Q&AList">
      {props.qData.map(question =>
        <QListQ
          key={question.question_id}
          question={question}
          updateHelpfulQ={props.updateHelpfulQ}
        />
      )}
    </div>
  );
};

export default QList;