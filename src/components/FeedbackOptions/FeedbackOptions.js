import React from 'react';

class FeedbackOptions extends React.Component{ 
render() {
    return (
        <div className="">
                <button type='button' onClick={this.handleClick}>Good</button>
                <button type='button' onClick={this.handleClick}>Neutral</button>
                <button type='button' onClick={this.handleClick}>Bad</button>
        </div>
        ); 
    }
};

export default FeedbackOptions;