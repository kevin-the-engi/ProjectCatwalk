import React from 'react';

const QListA = (props) => {
  // console.log(props);
  return(
    <div>
      <p>A: {props.answer.body}</p>
      <p>by {props.answer.answerer_name}</p>
    </div>
  );
};

export default QListA;