import React from 'react';
import QListQ from './QListQ.jsx';

const QList = (props) => {
  // console.log(props.qData);
  return (
    <div id="Q&AList">
      {props.qData.map((question, i) =>
        <QListQ
          key={i}
          question={question}
          getAnswers={props.getAnswers}
          addAnswer={props.addAnswer}
          updateHelpfulQ={props.updateHelpfulQ}
        />
      )}
    </div>
  );
};

export default QList;