import { Component } from "react";
import css from './FeedbackOptions.module.css';


export class FeedbackOptions extends Component {


    render(){
    return(
        <div className={css.buttonGroup}>
    <button className = {css.button} type="submit" name="good" onClick={ (e) => this.props.options(e) }> Good </button>
    <button className = {css.button} type="submit" name="neutral" onClick={ (e) => this.props.options(e) }> Neutral </button>
    <button className = {css.button} type="submit" name="bad" onClick={ (e) => this.props.options(e) }> Bad </button>
        </div>
    )}
}