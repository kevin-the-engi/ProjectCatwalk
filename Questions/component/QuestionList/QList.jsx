import React from 'react';
import QListQ from './QListQ.jsx';

const QList = (props) => {
  // console.log(props);
  return (
    <div id="Q&AList">
      {props.qData.map((question, i) =>
        i < props.qCount ?
          <QListQ
            key={question.question_id}
            question={question}
            updateHelpfulQ={props.updateHelpfulQ}
            productName={props.productName}
          /> : null


      )}
    </div>
  );
};

export default QList;