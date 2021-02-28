import React from 'react';

const PreviewImage = (props) => {
    return (
        <img class="thumb" src={props.stylesData[0].results[0].photos[0].url}></img>
    )
}

export default PreviewImage;