import React from 'react'
import Sliders from '../Sliders/Sliders.jsx'
import styles from './RatingBreakdown.modules.css'

const RatingBreakdown = (props) => {

   if (props.recommended.true !== '') {
    var oneRatings = Number(props.ratings['1']);
    var twoRatings = Number(props.ratings['2']);
    var threeRatings = Number(props.ratings['3']);
    var fourRatings = Number(props.ratings['4']);
    var fiveRatings = Number(props.ratings['5']);
    var totalRatings = oneRatings + twoRatings + threeRatings + fourRatings + fiveRatings;
    var avgRating = ((oneRatings*1) + (twoRatings*2) + (threeRatings*3) + (fourRatings*4) + (fiveRatings*5)) / totalRatings;
    var roundedAvg = avgRating.toFixed(1);
    var percentageOne = Math.round((oneRatings / totalRatings) * 100)
    var percentageTwo = Math.round((twoRatings / totalRatings) * 100)
    var percentageThree = Math.round((threeRatings / totalRatings) * 100)
    var percentageFour = Math.round((fourRatings / totalRatings) * 100)
    var percentageFive = Math.round((fiveRatings / totalRatings) * 100)

    var recommendTrue = Number(props.recommended.true);
    var recommendFalse = Number(props.recommended.false);
    var rating = recommendTrue / (recommendTrue + recommendFalse) * 100;
    var roundedRating = rating.toFixed(1);
   }

    return (
      <div>
        <div className={styles.header}>
          <div className={styles.numRating}>
            {roundedAvg}
          </div>
          <div>
             ★★★☆☆
          </div>
        </div>
        <div className={styles.recommend}>
          {roundedRating}% of reviewers recommend this product
        </div>
          <Sliders
          oneStar={percentageOne} oneRatings={oneRatings}
          twoStars={percentageTwo} twoRatings={twoRatings}
          threeStars={percentageThree} threeRatings={threeRatings}
          fourStars={percentageFour} fourRatings={fourRatings}
          fiveStars={percentageFive} fiveRatings={fiveRatings}
          />
      </div>
    )
  }


export default RatingBreakdown;
