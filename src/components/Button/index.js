import React from 'react';
import PropTypes from 'prop-types';
const Button = (props) => {
	return (<div>Hi</div>);
}

Button.propType = {
	/**
   * Determines the button style
   */
   primary: PropTypes.bool,
   secondary: PropTypes.bool,
   /**
	* button in a positive state
    */
   positive: PropTypes.bool,
   negative: PropTypes.bool,

   /**
	* determines if the button should look and feel disabled
    */
   disabled: PropTypes.bool
}
export default Button;