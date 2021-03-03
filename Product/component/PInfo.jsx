import React from 'react';
import styles from './PInfo.module.css';
import Style from './Style.jsx';
import Option from './Option.jsx'

const Info = ({info, changeStyle, thumbnails}) => (
  <div>
    <div className={styles.left}>
      <div className={styles.info}>
        <div className={styles.reviews}>
        ★★★★☆ <a className={styles.link}>Read all reviews</a>
        </div>

        <div className={styles.category}>
          <p>CATEGORY</p>
        </div>

        <div className={styles.name} >
          <p className={styles.name}>Expanded Product Name</p>
        </div>

        <div className={styles.price}>
          <p>{'$' + info.original_price}</p>
        </div>

        <div className={styles.text}>
          <p><strong>STYLE ></strong></p><p className={styles.second}>SELECTED STYLE</p>
        </div>

        <div className={styles.styles}>
          {thumbnails.map(img =>
          <Style img={img} changeStyle={changeStyle}/>)}
        </div>

        <div className={styles.selectors}>
          <div className={styles.select} >
            <select>
              <option className={styles.option}>SELECT SIZE</option>
            </select>
          </div>
          <div className={styles.quantity}>
            <select>
              <option>-</option>
            </select>
          </div>
        </div>

        <div className={styles.checkout}>
          <button className={styles.cart}>ADD TO BAG</button>
          <button className={styles.favorite}>☆</button>
        </div>

      </div>

      <div className={styles.description2}>
        <ul>Product descripton2</ul>
      </div>
    </div>
  </div>
)

export default Info;

  /* <option className={styles.option}>SELECT SIZE</option> */

  // {for (var key in info['skus']) {
  //   <Options size={key} />
  // }}