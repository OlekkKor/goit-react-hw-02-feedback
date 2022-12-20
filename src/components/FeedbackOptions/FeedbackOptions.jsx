import PropTypes from 'prop-types';

import { Component } from "react";
import css from './FeedbackOptions.module.css';


export class FeedbackOptions extends Component {

        render(){
         const { options } = this.props; 
             return (

             <div className={css.buttonGroup}>
              {options.map(el => {
                return (
                  <button className = {css.button} type="submit" key={el} onClick={() => this.props.onLeaveFeedback(el)}>
                    {el}
                  </button>
                );
              })}
            </div>
        );
      };
}



FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };