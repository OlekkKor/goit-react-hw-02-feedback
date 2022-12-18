import { Component } from "react";

export class Statistic extends Component {
    render (){
    return (
        <>
        <h2> Statistic </h2>

        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Neutral: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        {this.props.total > 0 && (  <p>Positive feedback: {this.props.positivePercentage} %</p> 
      )}
       
        </>
    ); 
    }
}


    //