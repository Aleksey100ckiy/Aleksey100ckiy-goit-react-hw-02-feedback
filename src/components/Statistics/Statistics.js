import React from 'react';

class Statistics extends React.Component {
   static defaultProps = {
        initialValue:0,
    }

    static propTypes = {
        
    }
    
  state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
        total: this.props.total,
        positivePercentage: this.props.positivePercentage,
  };
   

    render() {
    const { good, neutral, bad, total,  positivePercentage } = this.state;
    return (
        <div className="">
            <ul>
                <li>Good:{ good }</li>
                <li>Neutral:{ neutral }</li>
                <li>Bad:{ bad }</li>
                <li>Total:{ total }</li>
                <li>Positive feedback:{positivePercentage}%</li>
            </ul>
        </div>
        ); 
    }
};

export default Statistics;