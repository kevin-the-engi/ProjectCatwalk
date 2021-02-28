import React from 'react';
import QListQ from './QListQ.jsx';

const QList = (props) => {
  // console.log(props.qData);
  return (
    <div>
      <h4>Q&A List</h4>
      {props.qData.map((question, i) =>
        <QListQ
          key={i}
          question={question}
        />
      )}
    </div>
  );
};

export default QList;