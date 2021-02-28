import React from 'react';
import styles from './css_modules/ProductCard.module.css';

const PreviewImage = (props) => {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.previewImage} src={props.stylesData[0].results[0].photos[0].url}></img>
        </div>
    )
}

export default PreviewImage;