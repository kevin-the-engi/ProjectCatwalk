import React from 'react';
import QListQ from './QListQ.jsx';

const QList = (props) => {
  return (
    <div id="Q&AList">
      {props.qData.map(question =>
        <QListQ
          key={question.question_id}
          question={question}
          updateHelpfulQ={props.updateHelpfulQ}
          productName={props.productName}
          expand={props.expand}
        />
      )}
    </div>
  );
};

export default QList;