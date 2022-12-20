import PropTypes from 'prop-types';
import { Component } from "react";

export class Statistic extends Component {
    render (){
        const props = this.props;
    return (
        <>
        <h2> Statistic </h2>

        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>Total: {props.total}</p>
        {props.total > 0 && (  <p>Positive feedback: {props.positivePercentage} %</p> 
      )}
        </>
    ); 
    }
}


Statistic.propTypes = {
    props:  PropTypes.objectOf(PropTypes.string),
}