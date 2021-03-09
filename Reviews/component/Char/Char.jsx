import React from 'react'
import charOptionMapping from './charOptionMapping.js'
import styles from './Char.module.css'

class Char extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelect: '',
      selection: true
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(e) {
    var currentSelect = this.state.currentSelect
    this.setState({
      [currentSelect]: true
    })
  }

  handleSelect(e) {
    this.setState({
      currentSelect: e.target.value,
      selection: false
    })
    var charId = `${this.props.metaData.characteristics[this.props.char].id}`;
    this.props.handleSelectOption(charId, e.target.value)
  }


  render() {
    var charOptionsToRender = {};
    var selectedChar = [];
     if (this.props && this.props.char) {
      charOptionsToRender = charOptionMapping[this.props.char];
      selectedChar = Object.values(charOptionsToRender);
     }

    return (
      <div className={styles.charContainer}>
        <div className={styles.char}>{this.props.char}: </div>
        {this.state.selection ?
        <div className={styles.select}>Please select</div> :
        <div className={styles.select}>{selectedChar[this.state.currentSelect - 1]}</div>}
        <div className={styles.buttonContainer}>
          <div className={styles.buttons} onChange={this.handleSelect}>
            <input className={styles.button1} type="radio" id="1" value="1" checked={this.state.currentSelect === '1'}/>
            <input className={styles.button} type="radio" id="2" value="2" checked={this.state.currentSelect === '2'}/>
            <input className={styles.button} type="radio" id="3" value="3" checked={this.state.currentSelect === '3'}/>
            <input className={styles.button} type="radio" id="4" value="4" checked={this.state.currentSelect === '4'}/>
            <input className={styles.button5} type="radio" id="5" value="5" checked={this.state.currentSelect === '5'}/>
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.char1}>{selectedChar[0]}</div>
          <div className={styles.char2}>{selectedChar[2]}</div>
          <div className={styles.char3}>{selectedChar[4]}</div>
        </div>
      </div>
    )
  }
}

export default Char;