import React from 'react'
import Char from '../Char/Char.jsx'
import styles from './CharList.module.css'

class CharList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleSelectOption = this.handleSelectOption.bind(this)
  }

  handleSelectOption(id, rating) {
   this.setState({
     [id]: Number(rating)
   })

   this.props.updateChars(this.state);
  }

  render() {
    // console.log('charlist', this.state)
    var characteristics = Object.keys(this.props.metaData.characteristics);
    
    return (
      <div className={styles.container}>
        {characteristics.map((char, i) =>
        <Char char={char} metaData={this.props.metaData} handleSelectOption={this.handleSelectOption} key={i} />)}
      </div>
    )
  }
}

export default CharList;