import React, { useContext } from "react";
import PropTypes from 'prop-types';
import FeedbackContext from "../context/FeedbackContext";



function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // calculate average ratings
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  // can only have one decimal place 8.5. If last value is 9.0 then replace it with 9
  average = average.toFixed(1).replace(/[.,]0$/,'');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }









export default FeedbackStats;
