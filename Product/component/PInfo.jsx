import React from 'react';
import styles from './PInfo.module.css';
import Style from './Style.jsx';
import Option from './Option.jsx'
import Feature from './Feature.jsx'

class Info extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      quantity: {},
      skus: this.props.defaultStyle
    }

    this.addSizes = this.addSizes.bind(this)
  }

  addSizes(skus) {
    this.setState({
      skus: skus
    })
  }

  render () {

    return (
      <div>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.reviews}>
            ★★★★☆ <a className={styles.link}>Read all reviews</a>
            </div>

            <div>
              <p className={styles.category}>{this.props.info.category}</p>
            </div>

            <div>
              <p className={styles.name}>{this.props.info.name}</p>
            </div>

            <div>
              <p className={styles.price}>{'$' + this.props.info.default_price}</p>
            </div>

            <div className={styles.textbox}>
              <p className={styles.text}><strong>STYLE ></strong></p><p className={styles.second}>SELECTED STYLE</p>
            </div>

            <div className={styles.styles}>
              {this.props.styles.map((style, i) =>
              <Style key={i} style={style} changeStyle={this.props.changeStyle} addSizes={this.addSizes}/>)}
            </div>

            <div className={styles.selectors}>
              <div className={styles.select} >
                <select className={styles.selectButton}>
                  <option className={styles.option}>SELECT SIZE</option>
                </select>
              </div>
              <div className={styles.quantity}>
                <select className={styles.selectButton}>
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
            <ul className={styles.list}>
              {this.props.features.map((feature, i) =>
                <Feature key={i} feature={feature.feature}/>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Info;




