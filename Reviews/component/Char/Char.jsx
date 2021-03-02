import React from 'react'
import charOptionMapping from './charOptionMapping.js'
import styles from './Char.module.css'

class Char extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    e.preventDefault();
    var charId = `${this.props.metaData.characteristics[this.props.char].id}`;
    this.props.handleSelectOption(charId, e.target.name)
  }

  render() {
    var charOptionsToRender = charOptionMapping[this.props.char];
    var selectedChar = Object.entries(charOptionsToRender);
    return (
      <div>
        <div className={styles.char}>{this.props.char}: </div>
        <div>
          <button name="1" onClick={this.handleSelect}>1</button>
          <button name="2" onClick={this.handleSelect}>2</button>
          <button name="3" onClick={this.handleSelect}>3</button>
          <button name="4" onClick={this.handleSelect}>4</button>
          <button name="5" onClick={this.handleSelect}>5</button>
        </div>
        <div  className={styles.option}>
        {selectedChar.map((option) => {
          return (
            <div className={styles.optionRow}>
              <div>{option[0]}: {option[1]}</div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default Char;