import React from 'react';
import styles from './PInfo.module.css';
import NameAndPrice from './NameAndPrice.jsx'
import Style from './Style.jsx';
import Option from './Option.jsx'
import FeatureList from './FeatureList.jsx'
import OptionQ from './OptionQ.jsx'

class Info extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      quantity: [],
    }

    this.displayQuantities = this.displayQuantities.bind(this)
  }
  // based on currently selected style and size
  displayQuantities(e){
    var size =  e.target.value
    var quantity;
    for(var i = 0; i < this.props.skus.length; i++) {
      if(this.props.skus[i].size === size) {
        quantity = this.props.skus[i].quantity
      }
    }
    quantity = [...Array(quantity + 1).keys()].slice(1, 16)

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

            <NameAndPrice style={this.props.style}/>

            <div className={styles.styles}>
              {this.props.styles.map((style, i) =>
              <Style key={i} style={style} changeStyle={this.props.changeStyle}/>)}
            </div>

            <div className={styles.selectors}>
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

            <div className={styles.checkout}>
              <button className={styles.cart}>ADD TO BAG</button>
              <button className={styles.favorite}>☆</button>
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




