import React from 'react';
import PropTypes from 'prop-types';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const FeedbackOptions = ({options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((e) => (
        <button
          key={e}
          id={e}
          type='button'
          onClick={() => onLeaveFeedback(e)}>{capitalizeFirstLetter(e)}
        </button>
      ))}
  </div>
)
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;