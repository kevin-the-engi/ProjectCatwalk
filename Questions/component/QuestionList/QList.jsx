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
          expandA={props.expandA}
          isExpand={props.isExpand}
        />
      )}
    </div>
  );
};

export default QList;