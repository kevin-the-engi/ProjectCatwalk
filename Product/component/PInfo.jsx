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
    var sizeSelected = false;

    // if user selected size display quantity
    if(size !== 'SELECT SIZE' ) {
      sizeSelected = true;
      for(var i = 0; i < this.props.skus.length; i++) {
        if(this.props.skus[i].size === size) {
          quantity = this.props.skus[i].quantity
        }
      }
      if(quantity === 0) {
        // checkout button changes to "out of stock"
        isStocked = false;
        quantity = ['-']
      } else {
        quantity = [...Array(quantity + 1).keys()].slice(1, 16)
      }
    // otherwise display default quantity
    } else {
      quantity = ['-']
    }

    this.setState({
      quantity: quantity,
      sizeSelected:sizeSelected,
      isStocked: isStocked
    })
  }

  checkSizeSelected() {
    this.setState({
      checkoutClicked: true
    })
  }

  scroll() {
    var element_to_scroll_to = document.getElementById('#test');
    element_to_scroll_to.scrollIntoView();
  }

  render () {
    var prompt;

    if(this.state.sizeSelected === false && this.state.checkoutClicked === true) {
      prompt = <p id="prompt" className={styles.reminder}>Please Select Size</p>
    }

    return (
      <div>
        <div className={styles.left}>
          <div className={styles.info}>

            <div className={styles.reviews}>
            ★★★★☆ <p className={styles.link} onClick={(e) => scroll()}>Read all reviews</p>
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
                <select id="sizeSelector" className={styles.selectButton} onChange={(e) => this.displayQuantities(e)}>
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
              <Checkout id="checkout" isStocked={this.state.isStocked} checkSizeSelected={this.checkSizeSelected} />
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




