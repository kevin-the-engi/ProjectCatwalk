import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

class ComparisonModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      features: {},
      tableRows: []
    }
  }

  componentDidMount() {
    let featuresData = {};
    for (let i = 0; i < this.props.currentItem.features.length; i++) {
      if (this.props.currentItem.features[i].value === null) {
        featuresData[this.props.currentItem.features[i].feature] = {
          currentItem: {contains: 'yes', value: '✓'},
          relatedItem: {contains: 'no', value: null}
        }
      } else {
        featuresData[this.props.currentItem.features[i].feature] = {
          currentItem: {contains: 'yes', value: this.props.currentItem.features[i].value},
          relatedItem: {contains: 'no', value: null}
        }
      }
    }
    for (let j = 0; j < this.props.relatedItem.product.features.length; j++) {
      if (featuresData[this.props.relatedItem.product.features[j].feature]) {
        if (this.props.relatedItem.product.features[j].value === null) {
          featuresData[this.props.relatedItem.product.features[j].feature]['relatedItem'] = {contains: 'yes', value: '✓'}
        } else {
          featuresData[this.props.relatedItem.product.features[j].feature]['relatedItem'] = {contains: 'yes', value: this.props.relatedItem.product.features[j].value}
        }
      } else {
        if (this.props.relatedItem.product.features[j].value === null) {
          featuresData[this.props.relatedItem.product.features[j].feature] = {
            currentItem: {contains: 'no', value: null},
            relatedItem: {contains: 'yes', value: '✓'}
          }
        } else {
          featuresData[this.props.relatedItem.product.features[j].feature] = {
            currentItem: {contains: 'no', value: null},
            relatedItem: {contains: 'yes', value: this.props.relatedItem.product.features[j].value}
          }
        }
      }
    }
    // this.setState({features: Object.entries(featuresData)});
    let featuresArray = Object.entries(featuresData);
    let rows = [];
    for (let i = 0; i < featuresArray.length; i++) {
      let currentRow = [featuresArray[i][1].currentItem.value, featuresArray[i][0], featuresArray[i][1].relatedItem.value]
      rows.push(currentRow);
    }

    this.setState({tableRows: rows});
  }

  organizeFeaturesData() {
    // need to have qualities of current and related product passed down as props (DONE)
    // create a state object to track qualities of each of the two products being compared (DONE)
    // return table rows and add as variable to the conditional rendering within the render() method

    // let rows = [];
    // for (let i = 0; i < this.state.features.length; i++) {
    //   let currentRow = [this.state.features[i][1].currentItem.value, this.state.features[i][0], this.state.features[i][1].relatedItem.value]
    //   rows.push(currentRow);
    // }

    // this.setState({tableRows: rows});
    // let results;
    // for (var key in this.state.features) {
    //   let currentRow = 
    //       <tr>
    //         <td>{this.state.features[key]['currentItem']['value']}</td>
    //         <td>{this.state.features[key]}</td>
    //         <td>{this.state.features[key]['relatedItem']['value']}</td>
    //       </tr>;
    //     // console.log('results: ', results);
    //     // console.log('this.state.features[key][currentItem][value]: ', this.state.features[key]['currentItem']['value']);
    //   results += currentRow;
    // }
    // return results;
  }

  render() {
    // console.log('this.props.currentItem from ComparisonModal: ', this.props.currentItem);
    // console.log('this.props.relatedItem from ComparisonModal: ', this.props.relatedItem);
    // console.log('this.state.features: ', this.state.features);

    console.log('this.state.tableRows: ', this.state.tableRows);
    let showHide;
    if (!this.props.show) {
      showHide = null;
    } else {
      showHide = 
        <div className={styles.comparisonModalDisplayBlock} onClick={this.props.hideModal}>
          <section className={styles.comparisonModalMain}>
            <div>
              Comparing
            </div>
            <table>
              <tr>
                <th>Current Product Name</th>
                <th></th>
                <th>Related Product Name</th>
              </tr>
              {this.state.tableRows.map((feature) => (
              <tr>
                <td>{feature[0]}</td>
                <td>{feature[1]}</td>
                <td>{feature[2]}</td>
              </tr>
              ))}
            </table>
          </section>
        </div>
    }

    return (
      <div>
        {showHide}
      </div>
    )
  }
}

export default ComparisonModal;