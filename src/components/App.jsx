import React from 'react';
import Statistics from 'components/Statistics/Statistics.js';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from './Section/Section';

export class App extends React.Component{
      static defaultProps = {
        initialValue:0,
    }

    static propTypes = {
        
    }
    
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
  };

  handleClick = (e) => {
    let evt = e;
    let name = evt.target.innerHTML.toLowerCase();
        this.setState((prevState) => {
            return {
              [name]: prevState[name]+1,
            }
        });   
    }

  countTotalFeedback (){
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
     };
    
  countPositiveFeedbackPercentage() { 
    let total = this.countTotalFeedback();
    let percent = (this.state.good / total) * 100;
    return percent;
    };

  render() {
    return (
        <div className="">
        <Section title="Please leave feedback">
          <FeedbackOptions options={0} onLeaveFeedback={0}>
          </FeedbackOptions>
          </Section>
        <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
        </Section> 
        <Notification message="There is no feedback"></Notification>
        </div>
        ); 
};
}
