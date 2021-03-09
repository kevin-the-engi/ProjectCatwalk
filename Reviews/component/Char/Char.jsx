import React from 'react'
import charOptionMapping from './charOptionMapping.js'
import styles from './Char.module.css'

class Char extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      '5': false,
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    e.preventDefault();
    var charId = `${this.props.metaData.characteristics[this.props.char].id}`;
    this.props.handleSelectOption(charId, e.target.name)
  }


  render() {
    console.log('1 state', this.state['1'])
    var charOptionsToRender = charOptionMapping[this.props.char];
    var selectedChar = Object.entries(charOptionsToRender);
    return (
      <div>
        <div className={styles.char}>{this.props.char}*: </div>
        <div  className={styles.option}>
        {selectedChar.map((option) => {
          return (
            <div className={styles.optionRow}>
              <div>{option[0]}: {option[1]}</div>
            </div>
          )
        })}
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.b}>
            <div className={styles.label}>
              1:
            </div>
            <div className={styles.buttons}>
              <input type="radio" name="1" onClick={this.handleSelect} />
            </div>
          </div>
          <div className={styles.b}>
            <div className={styles.label}>
              2:
            </div>
            <div className={styles.buttons}>
              <input type="radio" name="2" onClick={this.handleSelect} />
            </div>
          </div>
          <div className={styles.b}>
            <div className={styles.label}>
              3:
            </div>
            <div className={styles.buttons}>
              <input type="radio" name="3" onClick={this.handleSelect} />
            </div>
          </div>
          <div className={styles.b}>
            <div className={styles.label}>
              4:
            </div>
            <div className={styles.buttons}>
              <input type="radio" name="4" onClick={this.handleSelect} />
            </div>
          </div>
          <div className={styles.b}>
            <div className={styles.label}>
              5:
            </div>
            <div className={styles.buttons}>
              <input type="radio" name="5" onClick={this.handleSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Char;