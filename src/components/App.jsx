import { Component } from 'react';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';


export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }



  incrementValue = (e) => {
    e.preventDefault()

    console.log(e.target.name);

    if (e.target.name === 'good'){
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    }
    
    if (e.target.name === 'neutral'){
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    }

    if (e.target.name === 'bad'){
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }
  }
    
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };


  countPositiveFeedbackPercentage = total => {
    if (!total) return;
    const { good } = this.state;
    return Math.floor((good / total) * 100);
  };

  
  render () { 
    return (
      <Section title="Please leave your feedback:">
      <FeedbackOptions 
        options={this.incrementValue} />
      
      {this.countTotalFeedback() 
        ?  ( <Statistic 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}/>
            ) : (
              <Notification message="There is no feedback...  :((" />
              )
            }


      </Section>
    )
  }


}