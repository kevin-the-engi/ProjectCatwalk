import React from 'react';
import styles from './PInfo.module.css';
import Style from './Style.jsx';
import Option from './Option.jsx'
import Feature from './Feature.jsx'
import OptionQ from './OptionQ.jsx'

class Info extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      skusData: [],
      quantity: [],
    }

    this.changeSizes = this.changeSizes.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    var skusData = []

    for(var sku in props.defaultStyle) {
      skusData.push(props.defaultStyle[sku])
    }

    return {
      skusData: skusData
    }
  }

  // renders sizes of new style selected by user
  changeSizes(skus) {
    var skusData = []
    // push whole sku object to element
    for(var sku in skus) {
      skusData.push(skus[sku])
    }
    this.setState({
      skusData: skusData,
    })
  }


  displayQuantities(e){
    var size =  e.target.value
    var quantity;
    for(var i = 0; i < this.state.skusData.length; i++) {
      if(this.state.skusData[i].size === size) {
        quantity = this.state.skusData[i].quantity
      }
    }
    quantity = [...Array(quantity + 1).keys()].slice(1, 16)
    // sets quantity based on selected size
    this.setState({
      quantity: quantity
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
              <Style key={i} style={style} changeStyle={this.props.changeStyle} displaySizes={this.displaySizes}/>)}
            </div>

            <div className={styles.selectors}>
              <div className={styles.select} >
                <select className={styles.selectButton} onChange={(e) => this.displayQuantities(e)}>
                  <option className={styles.option}>SELECT SIZE</option>
                  {this.state.skusData.map((skuData, i) =>
                    <Option key ={i} sku={skuData}/>
                  )}
                </select>
              </div>
              <div className={styles.quantity}>
                <select className={styles.selectButton}>
                  <option>-</option>
                  {this.state.quantity.map(num =>
                    <OptionQ quantity={num} />)}
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




