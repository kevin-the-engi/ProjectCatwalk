import React from 'react'
import Char from '../Char/Char.jsx'

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
    var characteristics = Object.keys(this.props.metaData.characteristics);
    return (
      <div>
        {characteristics.map((char) =>
        <Char char={char} metaData={this.props.metaData} handleSelectOption={this.handleSelectOption} />)}
      </div>
    )
  }
}

export default CharList;