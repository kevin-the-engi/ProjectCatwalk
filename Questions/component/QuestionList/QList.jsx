import React from 'react';
import QListQ from './QListQ.jsx';

const QList = (props) => {
  console.log(props.qData);
  return (
    <div id="Q&AList">
      {props.qData.map((question, i) =>
        <QListQ
          key={i}
          question={question}
          aData={props.aData}
          getAnswers={props.getAnswers}
          addAnswer={props.addAnswer}
          updateHelpfulQ={props.updateHelpfulQ}
          updateHelpfulA={props.updateHelpfulA}
          reportA={props.reportA}
        />
      )}
    </div>
  );
};

export default QList;