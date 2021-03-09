import React from 'react';
import styles from './PInfo.module.css';
import NameAndPrice from './NameAndPrice.jsx'
import Style from './Style.jsx';
import Option from './Option.jsx'
import FeatureList from './FeatureList.jsx'
import OptionQ from './OptionQ.jsx'
import Checkout from './Checkout.jsx'

class Info extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      quantity: [],
      sizeSelected: false,
      isStocked: true,
      checkoutClicked: false,
    }

    this.displayQuantities = this.displayQuantities.bind(this)
    this.checkSizeSelected = this.checkSizeSelected.bind(this)
  }
  // based on currently selected style and size
  displayQuantities(e){
    var size =  e.target.value
    var quantity;
    var isStocked = true;

    for(var i = 0; i < this.props.skus.length; i++) {
      if(this.props.skus[i].size === size) {
        quantity = this.props.skus[i].quantity
      }
    }
    quantity = [...Array(quantity + 1).keys()].slice(1, 16)

    if(quantity === 0) {
      isStocked = false;
    }

    this.setState({
      quantity: quantity,
      sizeSelected: true,
      isStocked: isStocked
    })
  }

  checkSizeSelected() {
    this.setState({
      checkoutClicked: true
    })
  }

  render () {
    var prompt;

    if(this.state.sizeSelected === false && this.state.checkoutClicked === true) {
      prompt = <p className={styles.reminder}>Please Select Size</p>
    }

    return (
      <div>
        <div className={styles.left}>
          <div className={styles.info}>

            <div className={styles.reviews}>
            ★★★★☆ <a className={styles.link}>Read all reviews</a>
            </div>

            <p className={styles.category}>{this.props.info.category}</p>

            <p className={styles.name}>{this.props.info.name}</p>

            <NameAndPrice style={this.props.style}/>

            <div className={styles.styles}>
              {this.props.styles.map(style =>
              <Style key={style.style_id} id={style.style_id} style={style} changeStyle={this.props.changeStyle}/>)}
            </div>

            {prompt}
            <div className={styles.selectorsDiv}>
              <div className={styles.select} >
                <select className={styles.selectButton} onChange={(e) => this.displayQuantities(e)}>
                  <option className={styles.option}>SELECT SIZE</option>
                  {this.props.skus.map((sku, i) =>
                    <Option key ={i} sku={sku}/>
                  )}
                </select>
              </div>
              <div className={styles.quantity}>
                <select className={styles.selectButton}>
                  <option>-</option>
                  {this.state.quantity.map((num, i) =>
                    <OptionQ key={i} quantity={num} />)}
                </select>
              </div>
            </div>
            <div className={styles.checkoutDiv}>
              <Checkout isStocked={this.state.isStocked} checkSizeSelected={this.checkSizeSelected} />
            </div>
          </div>

          <div className={styles.description2}>
            <FeatureList featureList={this.props.features}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Info;




