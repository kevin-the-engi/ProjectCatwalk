import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

// const ComparisonModal = (props) => {
//   const showHideClassName = props.show ? styles['displayBlock'] : styles['displayNone'];
//   console.log('showHideClassName: ', showHideClassName);

//   return (
//     <div className={showHideClassName} className={styles.comparisonModal}>
//       <section className={styles.comparisonModalMain}>
//         <div>
//           Comparing
//         </div>
//         <table>
//           <tr>
//             <th>Current Product Name</th>
//             <th></th>
//             <th>Related Product Name</th>
//           </tr>
//         </table>
//       </section>
//     </div>
//   )
// }

class ComparisonModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log('this.props.show: ', this.props.show);
    let showHide;
    if (!this.props.show) {
      showHide = null;
    } else {
      showHide = 
        <div className={styles.comparisonModalDisplayBlock}>
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