import PropTypes from 'prop-types';
import React from 'react';
import classes from './Button.module.css';

const Button = (props) => (
  <button
    type={props.type}
    disabled={props.disabled}
    className={[
      classes.Button,
      classes[props.btnType]
    ].join(' ')}
    onClick={props.clicked}>{props.children}</button>
)

Button.propTypes = {
  btnType: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string
}

export default Button;
