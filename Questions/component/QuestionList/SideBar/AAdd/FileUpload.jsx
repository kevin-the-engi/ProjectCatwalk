import React from 'react';
import form from '../../../../css/Form.module.css';

const FileUpload = (props) => {
  return(
    <img className={form.thumbnail} src={props.photo} height="100" width="100" alt={`thumbnail${props.alt}`}></img>
  )
};

export default FileUpload;