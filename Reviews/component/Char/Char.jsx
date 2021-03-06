import React from 'react'
import charOptionMapping from './charOptionMapping.js'
import styles from './Char.module.css'

class Char extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelect: '',
      selection: true,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
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
    e.preventDefault();
    this.setState({
      currentSelect: e.target.value,
      selection: false
    })
    var charId = `${this.props.metaData.characteristics[this.props.char].id}`;
    this.props.handleSelectOption(charId, e.target.name)
  }


  render() {
    //console.log('select', this.state.currentSelect)
    //console.log('typeofselect', typeof (this.state.currentSelect))
    // console.log('1', this.state['1'])
    // console.log('2', this.state['2'])
    // console.log('3', this.state['3'])
    // console.log('4', this.state['4'])
    // console.log('5', this.state['5'])
    var charOptionsToRender = charOptionMapping[this.props.char];
    var selectedChar = Object.values(charOptionsToRender);

    return (
      <div className={styles.charContainer}>
        <div className={styles.char}>{this.props.char}: </div>
        {this.state.selection ?
        <div className={styles.select}>Please select</div> :
        <div className={styles.select}>{selectedChar[this.state.currentSelect - 1]}</div>}
        <div className={styles.buttonContainer}>
          <div className={styles.b} >
            <input className={styles.buttons1} type="radio" name="1" value="1" onChange={this.handleSelect}/>
            <input className={styles.buttons} type="radio" name="2" value="2" onChange={this.handleSelect}/>
            <input className={styles.buttons} type="radio" name="3" value="3" onChange={this.handleSelect}/>
            <input className={styles.buttons} type="radio" name="4" value="4" onChange={this.handleSelect}/>
            <input className={styles.buttons5} type="radio" name="5" value="5" onChange={this.handleSelect}/>
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